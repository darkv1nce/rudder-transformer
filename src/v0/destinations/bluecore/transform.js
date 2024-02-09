// TODO: Add support for product array
// TODO : experiment if a custom event without distinct_id as an identifier reaches bluecore or not

const { isDefinedAndNotNull, ConfigurationError, TransformationError,
  InstrumentationError, } = require('@rudderstack/integrations-lib');
const { EventType } = require('../../../constants');
const {
  constructPayload,
  ErrorMessage,
  defaultRequestConfig,
  getValueFromMessage,
  simpleProcessRouterDest,
} = require('../../util');

const {
  MAPPING_CONFIG,
  CONFIG_CATEGORIES,
  BASE_URL,
} = require('./config');
const { verifyPayload, deduceTrackEventName } = require('./util');

const addProductArray = (message, payload, eventName) => {
  switch (eventName) {
    case 'viewed_product':
    case 'add_to_cart':
    case 'remove_from_cart':
    case 'wishlist':
      if (isDefinedAndNotNull(message.properties.products)) {
        return message.properties.products;
      }
      break;
    case 'purchase':
      if (isDefinedAndNotNull(message.properties.products)) {
        return message.properties.products;
      }
      break;
    default:
      break;
  }
};

const trackResponseBuilder = (message, category, { Config }, eventName) => {
  const payload = constructPayload(message, MAPPING_CONFIG[category.name]);
  // TODO: add support for product array
  if(eventName !== 'optin' || eventName !== 'unsubscribe') {
    payload.properties.product = addProductArray(message, payload, eventName);
  }
  payload.event = eventName;
  verifyPayload(payload, message);
  payload.token = Config.bluecoreNamespace;
  if (!payload) {
    // fail-safety for developer error
    throw new TransformationError(ErrorMessage.FailedToConstructPayload);
  }
  return payload;
};

const identifyResponseBuilder = (message, category, destination) => {
  const { Config } = destination;
  const { bluecoreNamespace } = Config;
  const payload = constructPayload(message, MAPPING_CONFIG[category.name]);
  payload.token = bluecoreNamespace;

  if (isDefinedAndNotNull(payload.event)) {
    verifyPayload(payload, message);
  } else {
    // unless user specifies the event to be 'identify', we will default to customer_patch
    payload.event = 'customer_patch';
  }
  if (!payload) {
    // fail-safety for developer error
    throw new TransformationError(ErrorMessage.FailedToConstructPayload);
  }
  return payload;
};

const responseBuilderSimple = (response) => {
  const resp = defaultRequestConfig();
  resp.endpoint = BASE_URL;
  resp.body.JSON = response;
  resp.headers = {
    'Content-Type': 'application/json',
  };
  return resp;
}

const process = async (event) => {
  const deducedEventNameArray = [];
  const toSendEvents = [];
  const respList = [];
  const { message, destination } = event;
  if (!message.type) {
    throw new InstrumentationError('Message Type is not present. Aborting message.');
  }

  if (!destination.Config.bluecoreNamespace) {
    throw new ConfigurationError('[BLUECORE] bluecore account namespace required for Authentication.');
  }
  const messageType = message.type.toLowerCase();
  const category = CONFIG_CATEGORIES[message.type.toUpperCase()];
  switch (messageType) {
    case EventType.TRACK:
      deducedEventNameArray.push(...deduceTrackEventName(message.event, destination.Config));
      deducedEventNameArray.forEach((eventName) => {
        const trackResponse = trackResponseBuilder(message, category, destination, eventName);
        toSendEvents.push(trackResponse);
      });
      break;
    case EventType.IDENTIFY:
      toSendEvents.push(identifyResponseBuilder(message, category, destination));
      break;
    default:
      throw new InstrumentationError(`Message type ${messageType} not supported`);
  }
  toSendEvents.forEach((sendEvent) => {
    respList.push(responseBuilderSimple(sendEvent));
  });
  return respList;
};

const processRouterDest = async (inputs, reqMetadata) => {
  const respList = await simpleProcessRouterDest(inputs, process, reqMetadata);
  return respList;
};

module.exports = { process, processRouterDest };