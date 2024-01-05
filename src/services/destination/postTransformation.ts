/* eslint-disable no-param-reassign */
import cloneDeep from 'lodash/cloneDeep';
import isObject from 'lodash/isObject';
import isEmpty from 'lodash/isEmpty';
import { PlatformError } from '@rudderstack/integrations-lib';
import {
  ProcessorTransformationRequest,
  ProcessorTransformationResponse,
  RouterTransformationResponse,
  ProcessorTransformationOutput,
  DeliveryResponse,
  MetaTransferObject,
  UserDeletionResponse,
  DeliveriesResponse,
  DeliveryJobState,
  ErrorDetailer,
  LoggableExtraData,
} from '../../types/index';
import { generateErrorObject } from '../../v0/util';
import { ErrorReportingService } from '../errorReporting';
import tags from '../../v0/util/tags';
import stats from '../../util/stats';
import { FixMe } from '../../util/types';
import customLogger from '../../logger/structured-logger';

const defaultErrorMessages = {
  router: '[Router Transform] Error occurred while processing the payload.',
  delivery: '[Delivery] Error occured while processing payload',
} as const;

export class DestinationPostTransformationService {
  public static logError(errorMessage: string, errorDetailer: ErrorDetailer) {
    const loggableExtraData: Partial<LoggableExtraData> = {
      ...(errorDetailer?.destinationId && { destinationId: errorDetailer.destinationId }),
      ...(errorDetailer?.sourceId && { sourceId: errorDetailer.sourceId }),
      ...(errorDetailer?.workspaceId && { workspaceId: errorDetailer.workspaceId }),
      ...(errorDetailer?.destType && { destType: errorDetailer.destType }),
      module: errorDetailer.module,
      implementation: errorDetailer.implementation,
    };
    customLogger.errorw(errorMessage || '', loggableExtraData);
  }

  public static handleProcessorTransformSucessEvents(
    event: ProcessorTransformationRequest,
    transformedPayloads: ProcessorTransformationOutput | ProcessorTransformationOutput[],
    destHandler: any,
  ): ProcessorTransformationResponse[] {
    if (!Array.isArray(transformedPayloads)) {
      transformedPayloads = [transformedPayloads];
    }
    const result = transformedPayloads.map((transformedPayload) => {
      let { userId } = transformedPayload;
      if (!userId) {
        userId = '';
      } else {
        userId = `${userId}`;
      }
      return {
        output: { ...transformedPayload, userId },
        metadata: destHandler?.processMetadata
          ? destHandler.processMetadata({
              metadata: event.metadata,
              inputEvent: event,
              outputEvent: transformedPayload,
            })
          : event.metadata,
        statusCode: 200,
      } as ProcessorTransformationResponse;
    });
    return result;
  }

  public static handleProcessorTransformFailureEvents(
    error: NonNullable<unknown>,
    metaTo: MetaTransferObject,
  ): ProcessorTransformationResponse {
    const errObj = generateErrorObject(error, metaTo.errorDetails);
    const resp = {
      metadata: metaTo.metadata,
      statusCode: errObj.status,
      error: errObj.message || '[Processor Transform] Error occurred while processing the payload.',
      statTags: errObj.statTags,
    } as ProcessorTransformationResponse;
    DestinationPostTransformationService.logError(
      errObj.message || '[Processor Transform] Error occurred while processing the payload.',
      metaTo.errorDetails,
    );
    ErrorReportingService.reportError(error, metaTo.errorContext, resp);
    return resp;
  }

  public static handleRouterTransformSuccessEvents(
    transformedPayloads: RouterTransformationResponse[],
    destHandler: any,
    metaTo: MetaTransferObject,
    implementation: string,
    destinationType: string,
  ): RouterTransformationResponse[] {
    const resultantPayloads: RouterTransformationResponse[] = cloneDeep(transformedPayloads);
    resultantPayloads.forEach((resultantPayload) => {
      if (resultantPayload.batchedRequest && resultantPayload.batchedRequest.userId) {
        resultantPayload.batchedRequest.userId = `${resultantPayload.batchedRequest.userId}`;
      }
    });

    if (destHandler?.processMetadataForRouter) {
      return resultantPayloads.map((resultantPayload) => {
        resultantPayload.metadata = destHandler.processMetadataForRouter(resultantPayload);
        return resultantPayload;
      });
    }

    resultantPayloads.forEach((resp: RouterTransformationResponse) => {
      if ('error' in resp && isObject(resp.statTags) && !isEmpty(resp.statTags)) {
        resp.statTags = {
          ...resp.statTags,
          ...metaTo.errorDetails,
        };
        DestinationPostTransformationService.logError(
          resp.error || defaultErrorMessages.router,
          metaTo.errorDetails,
        );
        stats.increment('event_transform_failure', metaTo.errorDetails);
      } else {
        stats.increment('event_transform_success', {
          destType: destinationType,
          module: tags.MODULES.DESTINATION,
          implementation,
          feature: tags.FEATURES.ROUTER,
          destinationId: metaTo.metadata?.destinationId,
          workspaceId: metaTo.metadata?.workspaceId,
        });
      }
    });

    return resultantPayloads;
  }

  public static handleRouterTransformFailureEvents(
    error: NonNullable<unknown>,
    metaTo: MetaTransferObject,
  ): RouterTransformationResponse {
    const errObj = generateErrorObject(error, metaTo.errorDetails);
    const resp = {
      metadata: metaTo.metadatas,
      batched: false,
      statusCode: errObj.status,
      error: errObj.message || defaultErrorMessages.router,
      statTags: errObj.statTags,
    } as RouterTransformationResponse;
    DestinationPostTransformationService.logError(
      errObj.message || defaultErrorMessages.router,
      metaTo.errorDetails,
    );
    ErrorReportingService.reportError(error, metaTo.errorContext, resp);
    stats.increment('event_transform_failure', metaTo.errorDetails);
    return resp;
  }

  public static handleBatchTransformFailureEvents(
    error: NonNullable<unknown>,
    metaTo: MetaTransferObject,
  ): RouterTransformationResponse {
    const errObj = generateErrorObject(error, metaTo.errorDetails);
    const resp = {
      metadata: metaTo.metadatas,
      batched: false,
      statusCode: 500, // for batch we should consider code error hence keeping retryable
      error: errObj.message || '[Batch Transform] Error occurred while processing payload.',
      statTags: errObj.statTags,
    } as RouterTransformationResponse;
    DestinationPostTransformationService.logError(
      errObj.message || '[Batch Transform] Error occurred while processing payload.',
      metaTo.errorDetails,
    );
    ErrorReportingService.reportError(error, metaTo.errorContext, resp);
    return resp;
  }

  public static handleDeliveryFailureEvents(
    error: any,
    metaTo: MetaTransferObject,
  ): DeliveryResponse {
    const errObj = generateErrorObject(error, metaTo.errorDetails, false);
    const resp = {
      status: errObj.status,
      message: errObj.message || defaultErrorMessages.delivery,
      destinationResponse: errObj.destinationResponse,
      statTags: errObj.statTags,
      ...(errObj.authErrorCategory && {
        authErrorCategory: errObj.authErrorCategory,
      }),
    } as DeliveryResponse;
    DestinationPostTransformationService.logError(
      errObj.message || defaultErrorMessages.delivery,
      metaTo.errorDetails,
    );
    ErrorReportingService.reportError(error, metaTo.errorContext, resp);
    return resp;
  }

  public static handlevV1DeliveriesFailureEvents(
    error: FixMe,
    metaTo: MetaTransferObject,
  ): DeliveriesResponse {
    const errObj = generateErrorObject(error, metaTo.errorDetails, false);
    const metadataArray = metaTo.metadatas;
    if (!Array.isArray(metadataArray)) {
      DestinationPostTransformationService.logError(
        'Proxy v1 endpoint error : metadataArray is not an array',
        metaTo.errorDetails,
      );
      // Panic
      throw new PlatformError('Proxy v1 endpoint error : metadataArray is not an array');
    }
    const responses = metadataArray.map((metadata) => {
      const resp = {
        error:
          JSON.stringify(error.destinationResponse?.response) ||
          errObj.message ||
          defaultErrorMessages.delivery,
        statusCode: errObj.status,
        metadata,
      } as DeliveryJobState;
      return resp;
    });

    const resp = {
      response: responses,
      statTags: errObj.statTags,
      authErrorCategory: errObj.authErrorCategory,
      message: errObj.message.toString(),
      status: errObj.status,
    } as DeliveriesResponse;
    DestinationPostTransformationService.logError(errObj.message, metaTo.errorDetails);
    ErrorReportingService.reportError(error, metaTo.errorContext, resp);
    return resp;
  }

  public static handleUserDeletionFailureEvents(
    error: NonNullable<unknown>,
    metaTo: MetaTransferObject,
  ): UserDeletionResponse {
    const errObj = generateErrorObject(error, metaTo.errorDetails, false);
    stats.increment('regulation_worker_user_deletion_failure', metaTo.errorDetails);
    const resp = {
      statusCode: errObj.status,
      error: errObj.message,
      ...(errObj.authErrorCategory && {
        authErrorCategory: errObj.authErrorCategory,
      }),
    } as UserDeletionResponse;
    DestinationPostTransformationService.logError(errObj.message, metaTo.errorDetails);
    ErrorReportingService.reportError(error, metaTo.errorContext, resp);
    return resp;
  }
}
