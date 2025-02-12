const { TAG_NAMES } = require('@rudderstack/integrations-lib');
const utilities = require('.');
const { getFuncTestData } = require('../../../test/testHelper');
const { FilteredEventsError } = require('./errorTypes');
const {
  hasCircularReference,
  flattenJson,
  generateExclusionList,
  combineBatchRequestsWithSameJobIds,
} = require('./index');

// Names of the utility functions to test
const functionNames = [
  'getDestinationExternalID',
  'isHybridModeEnabled',
  'handleSourceKeysOperation',
  'getValueFromPropertiesOrTraits',
  'getErrorStatusCode',
  'extractCustomFields',
  'batchMultiplexedEvents',
  'removeUndefinedNullValuesAndEmptyObjectArray',
  'groupEventsByType',
  'isValidInteger',
];

// Names of the utility functions to test which expects multiple arguments as values and not objects
const functionNamesExpectingMultipleArguments = [
  'checkAndCorrectUserId',
  'formatValues',
  'flattenJson',
];

describe('Utility Functions Tests', () => {
  describe.each(functionNames)('%s Tests', (funcName) => {
    const funcTestData = getFuncTestData(__dirname, `./testdata/${funcName}.json`);
    test.each(funcTestData)('$description', async ({ description, input, output }) => {
      try {
        let result;

        // This is to allow sending multiple arguments to the function
        if (Array.isArray(input)) {
          result = utilities[funcName](...input);
        } else {
          result = utilities[funcName](input);
        }
        expect(result).toEqual(output);
      } catch (e) {
        // Explicitly fail the test case
        expect(true).toEqual(false);
      }
    });
  });
  /* This is to allow sending multiple arguments to the function in case  when input is not an array but object
  * Like in case of checkAndCorrectUserId
  * "input": {
            "statusCode": 200,
            "userId": 1234
        }
  * checkAndCorrectUserId function expects two arguments statusCode and userId and not an object so we need to send them as multiple arguments
  * in the same order that they are defined in the function.
  * This order should be maintained in the input Object.
  */
  describe.each(functionNamesExpectingMultipleArguments)('%s Tests', (funcName) => {
    const funcTestData = getFuncTestData(__dirname, `./testdata/${funcName}.json`);
    test.each(funcTestData)('$description', async ({ description, input, output }) => {
      try {
        let result;
        result = utilities[funcName](...Object.values(input));
        expect(result).toEqual(output);
      } catch (e) {
        // Explicitly fail the test case
        expect(true).toEqual(false);
      }
    });
  });
});

//Test cases which can't be fit in above test suite, have individual function level test blocks

describe('hasCircularReference', () => {
  it('should return false when object has no circular reference', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(hasCircularReference(obj)).toBe(false);
  });

  it('should return true when object has circular reference', () => {
    const obj = { a: 1, b: 2 };
    obj.c = obj;
    expect(hasCircularReference(obj)).toBe(true);
  });

  it('should return true when object has nested objects containing circular reference', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    obj1.c = obj2;
    obj2.d = obj1;
    expect(hasCircularReference(obj1)).toBe(true);
  });

  it('should return false when input is null', () => {
    expect(hasCircularReference(null)).toBe(false);
  });

  it('should return false when input is not an object', () => {
    expect(hasCircularReference(123)).toBe(false);
  });

  it('should return true when object has self-reference', () => {
    const obj = { a: 1 };
    obj.b = obj;
    expect(hasCircularReference(obj)).toBe(true);
  });
});

// extra test cases for flattenJson
describe('flattenJson', () => {
  it('should throw an error when flattening a json object with circular reference', () => {
    const data = { name: 'John' };
    data.self = data;
    expect(() => flattenJson(data)).toThrow(
      "Event has circular reference. Can't flatten the event",
    );
  });
});

describe('tests for generateErrorObject', () => {
  test('test-0', () => {
    const myErr = new FilteredEventsError('error-1');
    const outputErrObj = utilities.generateErrorObject(myErr);
    expect(outputErrObj.statTags).toEqual({});
  });
});

describe('generateExclusionList', () => {
  it('should return an array of excluded keys when given a mapping config', () => {
    const mappingConfig = [
      {
        destKey: 'item_code',
        sourceKeys: ['product_id', 'sku'],
      },
      {
        destKey: 'name',
        sourceKeys: 'name',
      },
    ];
    const expected = ['product_id', 'sku', 'name'];
    const result = generateExclusionList(mappingConfig);
    expect(result).toEqual(expected);
  });

  it('should return an empty array when the mapping config is empty', () => {
    const mappingConfig = [];
    const expected = [];
    const result = generateExclusionList(mappingConfig);
    expect(result).toEqual(expected);
  });

  it('should return an array with unique keys when the mapping config has duplicate destination keys', () => {
    const mappingConfig = [
      {
        destKey: 'item_code',
        sourceKeys: ['product_id'],
      },
      {
        destKey: 'item_code',
        sourceKeys: ['sku'],
      },
    ];
    const expected = ['product_id', 'sku'];
    const result = generateExclusionList(mappingConfig);
    expect(result).toEqual(expected);
  });
});

describe('Unit test cases for combineBatchRequestsWithSameJobIds', () => {
  it('Combine batch request with same jobIds', async () => {
    const input = [
      {
        batchedRequest: {
          endpoint: 'https://endpoint1',
        },
        metadata: [
          {
            jobId: 1,
          },
          {
            jobId: 4,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
      {
        batchedRequest: {
          endpoint: 'https://endpoint2',
        },
        metadata: [
          {
            jobId: 3,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
      {
        batchedRequest: {
          endpoint: 'https://endpoint1',
        },
        metadata: [
          {
            jobId: 5,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
      {
        batchedRequest: {
          endpoint: 'https://endpoint3',
        },
        metadata: [
          {
            jobId: 1,
          },
          {
            jobId: 3,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
      {
        batchedRequest: {
          endpoint: 'https://endpoint2',
        },
        metadata: [
          {
            jobId: 6,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
    ];

    const expectedOutput = [
      {
        batchedRequest: [
          {
            endpoint: 'https://endpoint1',
          },
          {
            endpoint: 'https://endpoint3',
          },
          {
            endpoint: 'https://endpoint2',
          },
        ],
        metadata: [
          {
            jobId: 1,
          },
          {
            jobId: 4,
          },
          {
            jobId: 3,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
      {
        batchedRequest: {
          endpoint: 'https://endpoint1',
        },
        metadata: [
          {
            jobId: 5,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
      {
        batchedRequest: {
          endpoint: 'https://endpoint2',
        },
        metadata: [
          {
            jobId: 6,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
    ];
    expect(combineBatchRequestsWithSameJobIds(input)).toEqual(expectedOutput);
  });

  it('Each batchRequest contains unique jobIds (no event multiplexing)', async () => {
    const input = [
      {
        batchedRequest: {
          endpoint: 'https://endpoint1',
        },
        metadata: [
          {
            jobId: 1,
          },
          {
            jobId: 4,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
      {
        batchedRequest: {
          endpoint: 'https://endpoint3',
        },
        metadata: [
          {
            jobId: 2,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
      {
        batchedRequest: {
          endpoint: 'https://endpoint3',
        },
        metadata: [
          {
            jobId: 5,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
    ];

    const expectedOutput = [
      {
        batchedRequest: {
          endpoint: 'https://endpoint1',
        },

        metadata: [
          {
            jobId: 1,
          },
          {
            jobId: 4,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
      {
        batchedRequest: {
          endpoint: 'https://endpoint3',
        },
        metadata: [
          {
            jobId: 2,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
      {
        batchedRequest: {
          endpoint: 'https://endpoint3',
        },
        metadata: [
          {
            jobId: 5,
          },
        ],
        batched: true,
        statusCode: 200,
        destination: {
          Config: {
            key: 'value',
          },
        },
      },
    ];
    expect(combineBatchRequestsWithSameJobIds(input)).toEqual(expectedOutput);
  });
});
