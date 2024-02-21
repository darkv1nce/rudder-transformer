import { VERSION } from '../../../../../src/v0/destinations/facebook_pixel/config';
import {
  overrideDestination,
  transformResultBuilder,
  generateTrackPayload,
} from '../../../testUtils';

const commonDestination = {
  Config: {
    limitedDataUSage: true,
    blacklistPiiProperties: [
      {
        blacklistPiiProperties: '',
        blacklistPiiHash: false,
      },
    ],
    accessToken: '09876',
    pixelId: 'dummyPixelId',
    eventsToEvents: [
      {
        from: 'ABC Started',
        to: 'InitiateCheckout',
      },
    ],
    eventCustomProperties: [
      {
        eventCustomProperties: '',
      },
    ],
    valueFieldIdentifier: '',
    advancedMapping: false,
    whitelistPiiProperties: [
      {
        whitelistPiiProperties: 'email',
      },
    ],
    categoryToContent: [
      {
        from: 'clothing',
        to: 'newClothing',
      },
    ],
  },
  Enabled: true,
};

const commonUserTraits = {
  email: 'abc@gmail.com',
  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
  event_id: '12345',
};

const piiPropertiesForAllowDeny = {
  email: 'abc@gmail.com',
  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
  event_id: '12345',
  firstName: 'John',
  lastName: 'Doe',
  whitelistProp1: 'val1',
  blacklistProp2: 'val2',
  blacklistProp3: 'val3',
  category: 'dummy',
  quantity: 10,
  value: 100,
  product_id: '12345',
};

const commonPropertiesWithoutProductArray = {
  category: 'dummy',
  quantity: 10,
  value: 100,
  product_id: '12345',
};

const commonTimestamp = new Date('2023-10-14');

export const configLevelFeaturesTestData = [
  {
    name: 'facebook_pixel',
    description: 'config feature : limitedDataUSage switched on',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: generateTrackPayload({
              event: 'product list viewed',
              properties: commonPropertiesWithoutProductArray,
              context: {
                traits: commonUserTraits,
                dataProcessingOptions: ['val1', 'val2', 'val3'],
              },
              timestamp: commonTimestamp,
            }),
            destination: commonDestination,
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: `https://graph.facebook.com/${VERSION}/dummyPixelId/events?access_token=09876`,
              headers: {},
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  data: [
                    '{"user_data":{"external_id":"3ffc8a075f330402d82aa0a86c596b0d2fe70df38b22c5be579f86a18e4aca47","em":"48ddb93f0b30c475423fe177832912c5bcdce3cc72872f8051627967ef278e08","client_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0"},"event_name":"ViewContent","event_time":1697241600,"event_id":"12345","action_source":"website","data_processing_options":"val1","data_processing_options_country":"val2","data_processing_options_state":"val3","custom_data":{"category":"dummy","quantity":10,"value":100,"product_id":"12345","content_ids":["dummy"],"content_type":"product_group","contents":[{"id":"dummy","quantity":1}],"content_category":"dummy","currency":"USD"}}',
                  ],
                },
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'facebook_pixel',
    description:
      'config feature : ContentCategoryMapping table is filled up, and category is passed with properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: generateTrackPayload({
              event: 'product list viewed',
              properties: { ...commonPropertiesWithoutProductArray, category: 'clothing' },
              context: {
                traits: commonUserTraits,
                dataProcessingOptions: ['val1', 'val2', 'val3'],
              },
              timestamp: commonTimestamp,
            }),
            destination: commonDestination,
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: `https://graph.facebook.com/${VERSION}/dummyPixelId/events?access_token=09876`,
              headers: {},
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  data: [
                    '{"user_data":{"external_id":"3ffc8a075f330402d82aa0a86c596b0d2fe70df38b22c5be579f86a18e4aca47","em":"48ddb93f0b30c475423fe177832912c5bcdce3cc72872f8051627967ef278e08","client_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0"},"event_name":"ViewContent","event_time":1697241600,"event_id":"12345","action_source":"website","data_processing_options":"val1","data_processing_options_country":"val2","data_processing_options_state":"val3","custom_data":{"category":"clothing","quantity":10,"value":100,"product_id":"12345","content_ids":["clothing"],"content_type":"newClothing","contents":[{"id":"clothing","quantity":1}],"content_category":"clothing","currency":"USD"}}',
                  ],
                },
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'facebook_pixel',
    description:
      'config feature : ContentCategoryMapping table is filled up, and category is passed with properties along with contentType via integrations object',
    successCriteria: 'contentType should be used from integrations object',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: generateTrackPayload({
              event: 'product list viewed',
              properties: { ...commonPropertiesWithoutProductArray, category: 'clothing' },
              context: {
                traits: commonUserTraits,
              },
              timestamp: commonTimestamp,
              integrations: {
                FacebookPixel: {
                  contentType: 'newClothingFromIntegrationObject',
                },
              },
            }),
            destination: commonDestination,
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: `https://graph.facebook.com/${VERSION}/dummyPixelId/events?access_token=09876`,
              headers: {},
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  data: [
                    '{"user_data":{"external_id":"3ffc8a075f330402d82aa0a86c596b0d2fe70df38b22c5be579f86a18e4aca47","em":"48ddb93f0b30c475423fe177832912c5bcdce3cc72872f8051627967ef278e08","client_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0"},"event_name":"ViewContent","event_time":1697241600,"event_id":"12345","action_source":"website","custom_data":{"category":"clothing","quantity":10,"value":100,"product_id":"12345","content_ids":["clothing"],"content_type":"newClothingFromIntegrationObject","contents":[{"id":"clothing","quantity":1}],"content_category":"clothing","currency":"USD"}}',
                  ],
                },
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'facebook_pixel',
    description:
      'config feature : Config mapped whiteList and blackListed properties with marked hashed within integrations object, along with default pii property email in the properties',
    successCriteria:
      'BlackListed properties should not be hashed and default pii property should be deleted from the properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: generateTrackPayload({
              event: 'product list viewed',
              properties: { ...piiPropertiesForAllowDeny },
              context: {
                traits: commonUserTraits,
              },
              timestamp: commonTimestamp,
              integrations: {
                FacebookPixel: {
                  hashed: true,
                },
              },
            }),
            destination: overrideDestination(commonDestination, {
              whitelistPiiProperties: [
                {
                  whitelistPiiProperties: 'whitelistProp1',
                },
              ],
              blacklistPiiProperties: [
                {
                  blacklistPiiProperties: 'blacklistProp2',
                },
                {
                  blacklistPiiProperties: 'blacklistProp3',
                },
              ],
            }),
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: `https://graph.facebook.com/${VERSION}/dummyPixelId/events?access_token=09876`,
              headers: {},
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  data: [
                    '{"user_data":{"external_id":"default-user-id","em":"abc@gmail.com","client_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0"},"event_name":"ViewContent","event_time":1697241600,"event_id":"12345","action_source":"website","custom_data":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","whitelistProp1":"val1","blacklistProp2":"val2","blacklistProp3":"val3","category":"dummy","quantity":10,"value":100,"product_id":"12345","content_ids":["dummy"],"content_type":"product_group","contents":[{"id":"dummy","quantity":1}],"content_category":"dummy","currency":"USD"}}',
                  ],
                },
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'facebook_pixel',
    description:
      'config feature : Config mapped whiteList and blackListed properties without marked hashed within integrations object but marked hashed true from UI, along with default pii property email in the properties',
    successCriteria:
      'BlackListed properties should be hashed and default pii property should be deleted from the properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: generateTrackPayload({
              event: 'product list viewed',
              properties: { ...piiPropertiesForAllowDeny },
              context: {
                traits: commonUserTraits,
              },
              timestamp: commonTimestamp,
            }),
            destination: overrideDestination(commonDestination, {
              whitelistPiiProperties: [
                {
                  whitelistPiiProperties: 'whitelistProp1',
                },
              ],
              blacklistPiiProperties: [
                {
                  blacklistPiiProperties: 'blacklistProp2',
                  blacklistPiiHash: true,
                },
                {
                  blacklistPiiProperties: 'blacklistProp3',
                  blacklistPiiHash: true,
                },
              ],
            }),
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: `https://graph.facebook.com/${VERSION}/dummyPixelId/events?access_token=09876`,
              headers: {},
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  data: [
                    '{"user_data":{"external_id":"3ffc8a075f330402d82aa0a86c596b0d2fe70df38b22c5be579f86a18e4aca47","em":"48ddb93f0b30c475423fe177832912c5bcdce3cc72872f8051627967ef278e08","client_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0"},"event_name":"ViewContent","event_time":1697241600,"event_id":"12345","action_source":"website","custom_data":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","whitelistProp1":"val1","blacklistProp2":"528e5290f8ff0eb0325f0472b9c1a9ef4fac0b02ff6094b64d9382af4a10444b","blacklistProp3":"bac8d4414984861d5199b7a97699c728bee36c4084299b2ca905434cf65d8944","category":"dummy","quantity":10,"value":100,"product_id":"12345","content_ids":["dummy"],"content_type":"product_group","contents":[{"id":"dummy","quantity":1}],"content_category":"dummy","currency":"USD"}}',
                  ],
                },
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'facebook_pixel',
    description:
      'config feature : Config mapped whiteList and blackListed properties marked hashed within integrations object but marked hashed true from UI, along with default pii property email in the properties',
    successCriteria:
      'BlackListed properties should not be hashed again and default pii property should be deleted from the properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: generateTrackPayload({
              event: 'product list viewed',
              properties: { ...piiPropertiesForAllowDeny },
              context: {
                traits: commonUserTraits,
              },
              timestamp: commonTimestamp,
              integrations: {
                FacebookPixel: {
                  hashed: true,
                },
              },
            }),
            destination: overrideDestination(commonDestination, {
              whitelistPiiProperties: [
                {
                  whitelistPiiProperties: 'whitelistProp1',
                },
              ],
              blacklistPiiProperties: [
                {
                  blacklistPiiProperties: 'blacklistProp2',
                  blacklistPiiHash: true,
                },
                {
                  blacklistPiiProperties: 'blacklistProp3',
                  blacklistPiiHash: true,
                },
              ],
            }),
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: `https://graph.facebook.com/${VERSION}/dummyPixelId/events?access_token=09876`,
              headers: {},
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  data: [
                    '{"user_data":{"external_id":"default-user-id","em":"abc@gmail.com","client_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0"},"event_name":"ViewContent","event_time":1697241600,"event_id":"12345","action_source":"website","custom_data":{"anonymousId":"c82cbdff-e5be-4009-ac78-cdeea09ab4b1","whitelistProp1":"val1","blacklistProp2":"val2","blacklistProp3":"val3","category":"dummy","quantity":10,"value":100,"product_id":"12345","content_ids":["dummy"],"content_type":"product_group","contents":[{"id":"dummy","quantity":1}],"content_category":"dummy","currency":"USD"}}',
                  ],
                },
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
];
