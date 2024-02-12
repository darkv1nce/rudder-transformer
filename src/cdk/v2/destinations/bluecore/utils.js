const { InstrumentationError, isDefinedAndNotNullAndNotEmpty, getHashFromArrayWithDuplicate, isDefinedAndNotNull, isDefinedNotNullNotEmpty } = require("@rudderstack/integrations-lib");
const { getFieldValueFromMessage, validateEventName, constructPayload } = require('../../../../v0/util');
const { EVENT_NAME_MAPPING } = require("./config");
const { EventType } = require('../../../../constants');
const {
    MAPPING_CONFIG,
    CONFIG_CATEGORIES,
  } = require('./config');

/**
 * Verifies the correctness of payload for different events.
 *
 * @param {Object} payload - The payload object containing event information.
 * @param {Object} message - The message object containing additional information.
 * @throws {InstrumentationError} - Throws an error if required properties are missing.
 * @returns {void}
 */
const verifyPayload = (payload, message) => {
    if (message.type === EventType.IDENTIFY && isDefinedNotNullNotEmpty(payload.event) && payload.event !== 'identify') {
        throw new InstrumentationError('[Bluecore]  traits.action must be \'identify\' for identify action');
    }
    switch (payload.event) {
        case 'search':
            if (!payload.properties.search_term) {
                throw new InstrumentationError('[Bluecore] property:: search_query is required for search event');
            }
            break;
        case 'purchase':
            if (!payload.properties.order_id) {
                throw new InstrumentationError('[Bluecore] property:: order_id is required for purchase event');
            }
            if (!payload.properties.total) {
                throw new InstrumentationError('[Bluecore] property:: total is required for purchase event');
            }
            break;
        case 'identify':
            if (!isDefinedAndNotNullAndNotEmpty(getFieldValueFromMessage(message, 'email'))) {
                throw new InstrumentationError('[Bluecore] property:: email is required for \'identify\' action');
            }
            break;
        default:
            break;
    }
};

/**
 * Deduces the track event name based on the provided track event name and configuration.
 *
 * @param {string} trackEventName - The track event name to deduce.
 * @param {object} Config - The configuration object.
 * @returns {string|array} - The deduced track event name.
 */
const deduceTrackEventName = (trackEventName, Config) => {
    let eventName;
    const { eventsMapping } = Config;
    validateEventName(trackEventName);
    /*
    Step 1: Will look for the event name in the eventsMapping array if mapped to a standard bluecore event.
            and return the corresponding event name if found.
     */
    if (eventsMapping.length > 0) {
        const keyMap = getHashFromArrayWithDuplicate(eventsMapping, 'from', 'to', false);
        eventName = keyMap[trackEventName];
        const finalEvent = [...eventName];
        return finalEvent;
    }
    /*
    Step 2: To find if the particular event is amongst the list of standard
            Rudderstack ecommerce events, used specifically for Bluecore API
            mappings.
    */

    const eventMapInfo = EVENT_NAME_MAPPING.find((eventMap) => {
        if (eventMap.src.includes(trackEventName.toLowerCase())) {
            return eventMap;
        }
        return false;
    });
    if (isDefinedAndNotNull(eventMapInfo)) {
        return [eventMapInfo.dest];
    }

    // Step 3: if nothing matches this is to be considered as a custom event
    return [trackEventName];
};

/**
 * Determines if the given event name is a standard Bluecore event.
 *
 * @param {string} eventName - The name of the event to check.
 * @returns {boolean} - True if the event is a standard Bluecore event, false otherwise.
 */
const isStandardBluecoreEvent = (eventName) => {
    const standardEventList = EVENT_NAME_MAPPING.map(item => item.dest);
    return !!(standardEventList.includes(eventName));
}

/**
 * Adds an array of products to a message.
 *
 * @param {object} message - The message object to add the products to.
 * @param {array|object} products - The array or object of products to add.
 * @param {string} eventName - The name of the event.
 * @throws {InstrumentationError} - If the products array is not defined or null.
 * @returns {array} - The updated product array.
 */
const addProductArray = (products, eventName) => {
    let finalProductArray = null;
    if(eventName !== 'optin' && eventName !== 'unsubscribe' && eventName !== 'search') {
        if (!isDefinedAndNotNull(products) && isStandardBluecoreEvent(eventName)) {
            throw new InstrumentationError(`Product array is required for ${eventName} event`);
        }
        if (isDefinedAndNotNull(products)) {
            const productArray = Array.isArray(products) ? products : [products];
            const mappedProductArray = productArray.map(({ product_id, query, order_id, total, ...rest }) => ({
                id: product_id,
                ...rest
            }));
            finalProductArray = mappedProductArray;
        }
    }
 
    return finalProductArray;
}

const constructProperties = (message) => {
    const category = CONFIG_CATEGORIES[message.type.toUpperCase()];
    const payload =  constructPayload(message, MAPPING_CONFIG[category.name]);
    return payload;
  };

module.exports = {
    verifyPayload,
    deduceTrackEventName,
    addProductArray,
    isStandardBluecoreEvent,
    constructProperties
};

