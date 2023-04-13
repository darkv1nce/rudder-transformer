import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import gracefulShutdown from 'http-graceful-shutdown';
import logger from './logger';
import dotenv from 'dotenv';
import cluster from './util/cluster';
import { router } from './versionedRouter';
import { testRouter } from './testRouter';
import { metricsRouter } from './metricsRouter';
import { addStatMiddleware } from './middleware';
import { logProcessInfo } from './util/utils';
import { applicationRoutes } from './routes';

dotenv.config();
const clusterEnabled = process.env.CLUSTER_ENABLED !== 'false';
const useUpdatedRoutes = process.env.ENABLE_NEW_ROUTES !== 'false';
const port = parseInt(process.env.PORT || '9090', 10);
const metricsPort = parseInt(process.env.METRICS_PORT || '9091', 10);

const app = new Koa();
addStatMiddleware(app);

const metricsApp = new Koa();
addStatMiddleware(metricsApp);
metricsApp.use(metricsRouter.routes()).use(metricsRouter.allowedMethods());

app.use(
  bodyParser({
    jsonLimit: '200mb',
  }),
);

if (useUpdatedRoutes) {
  logger.info('Using new routes');
  applicationRoutes(app);
} else {
  // To be depricated
  logger.info('Using old routes');
  app.use(router.routes()).use(router.allowedMethods());
  app.use(testRouter.routes()).use(testRouter.allowedMethods());
}

function finalFunction() {
  logger.error(`Process (pid: ${process.pid}) was gracefully shutdown`);
  logProcessInfo();
}

if (clusterEnabled) {
  cluster.start(port, app, metricsApp);
} else {
  // HTTP server for exposing metrics
  if (process.env.STATS_CLIENT === 'prometheus') {
    metricsApp.listen(metricsPort);
  }

  const server = app.listen(port);

  process.on('SIGTERM', () => {
    logger.error(`SIGTERM signal received`);
  });

  process.on('SIGINT', () => {
    logger.error(`SIGINT signal received`);
  });

  process.on('SIGSEGV', () => {
    logger.error(`SIGSEGV - JavaScript memory error occurred`);
  });

  gracefulShutdown(server, {
    signals: 'SIGINT SIGTERM SIGSEGV',
    timeout: 30000, // timeout: 30 secs
    forceExit: true, // triggers process.exit() at the end of shutdown process
    finally: finalFunction,
  });

  logger.info(`App started. Listening on port: ${port}`);
}

export default app;