export const data = [
  {
    name: 'gainsight_px',
    description: 'Test 0',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              message: {
                type: 'identify',
                sentAt: '2021-06-25T08:59:52.891Z',
                userId: 'stanley-kubrick',
                channel: 'web',
                context: {
                  os: { name: '', version: '' },
                  app: {
                    name: 'RudderLabs JavaScript SDK',
                    build: '1.0.0',
                    version: '1.1.18',
                    namespace: 'com.rudderlabs.javascript',
                  },
                  page: {
                    title: 'Test',
                    search: '',
                    path: 'index.html',
                    url: 'http://127.0.0.1:3003/index.html',
                    tab_url: 'http://127.0.0.1:3003/index.html',
                    referrer: '$direct',
                    initial_referrer: '$direct',
                    referring_domain: '',
                    initial_referring_domain: '',
                  },
                  locale: 'en-GB',
                  screen: {
                    width: 1920,
                    height: 1080,
                    density: 1,
                    innerWidth: 1920,
                    innerHeight: 436,
                  },
                  traits: {
                    name: 'Stanley Kubrick',
                    email: 'stanley@kubrick.com',
                    score: 100,
                    title: 'Director/Film Maker',
                    gender: 'Male',
                    countryCode: 'US',
                    countryName: 'USA',
                    hobbyCustomField: 'Making films. Being a genius',
                  },
                  library: { name: 'RudderLabs JavaScript SDK', version: '1.1.18' },
                  campaign: {},
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
                },
                rudderId: '9a7820d0-0ff2-4451-b655-682cec15cbd2',
                messageId: 'ff90d62e-a6e3-4e23-af20-03b4a249ef48',
                timestamp: '2021-06-25T14:29:52.911+05:30',
                receivedAt: '2021-06-25T14:29:52.911+05:30',
                request_ip: '[::1]',
                anonymousId: '1585ea2f-dddc-4d23-935f-c1196405d61e',
                integrations: { All: true },
                originalTimestamp: '2021-06-25T08:59:52.891Z',
              },
              metadata: {
                userId: '9a7820d0-0ff2-4451-b655-682cec15cbd2',
                jobId: 1,
                sourceId: '1s9eG8UCer6YSKsD8ZlQCyLa3pj',
                destinationId: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                attemptNum: 0,
                receivedAt: '2021-06-25T14:29:52.911+05:30',
                createdAt: '2021-06-25T08:59:56.329Z',
                firstAttemptedAt: '',
                transformAt: 'router',
              },
              destination: {
                ID: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                Name: 'gainsight-px-dest',
                DestinationDefinition: {
                  ID: '1uLuOdwPCqtei55ZKXewwPhjQPf',
                  Name: 'GAINSIGHT_PX',
                  DisplayName: 'Gainsight PX',
                  Config: {
                    destConfig: {
                      defaultConfig: [
                        'apiKey',
                        'productTagKey',
                        'userAttributeMap',
                        'accountAttributeMap',
                        'globalContextMap',
                      ],
                    },
                    excludeKeys: [],
                    includeKeys: [],
                    saveDestinationResponse: true,
                    secretKeys: ['apiKey', 'productTagKey'],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                      'flutter',
                    ],
                    transformAt: 'router',
                    transformAtV1: 'router',
                  },
                  ResponseRules: {},
                },
                Config: {
                  accountAttributeMap: [{ from: 'cultureCustomField', to: 'culture' }],
                  apiKey: 'sample-api-key',
                  eventDelivery: false,
                  eventDeliveryTS: 1624472902670,
                  globalContextMap: [{ from: 'kubrickTest', to: 'value' }],
                  productTagKey: 'AP-SAMPLE-2',
                  userAttributeMap: [{ from: 'hobbyCustomField', to: 'hobby' }],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              message: {
                type: 'track',
                event: 'nested test2',
                sentAt: '2021-06-26T10:41:22.316Z',
                userId: 'adifhas9734',
                channel: 'web',
                context: {
                  os: { name: '', version: '' },
                  app: {
                    name: 'RudderLabs JavaScript SDK',
                    build: '1.0.0',
                    version: '1.1.18',
                    namespace: 'com.rudderlabs.javascript',
                  },
                  page: {
                    url: 'file:///Users/anurajguha/workspace/simple-html-test/index.html',
                    path: '/Users/anurajguha/workspace/simple-html-test/index.html',
                    title: 'Test',
                    search: '',
                    tab_url: 'file:///Users/anurajguha/workspace/simple-html-test/index.html',
                    referrer: '$direct',
                    initial_referrer: '$direct',
                    referring_domain: '',
                    initial_referring_domain: '',
                  },
                  locale: 'en-GB',
                  screen: {
                    width: 1920,
                    height: 1080,
                    density: 1,
                    innerWidth: 1920,
                    innerHeight: 585,
                  },
                  traits: {
                    name: 'Update test unique',
                    phone: '9900990899',
                    lastname: 'user6',
                    firstname: 'test',
                    previousCompany: 'testprevCompany2',
                  },
                  library: { name: 'RudderLabs JavaScript SDK', version: '1.1.18' },
                  campaign: {},
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
                },
                rudderId: 'a27a8a8a-9e81-4898-beeb-e6041fc1552d',
                messageId: '595dae36-5e4f-4feb-a2e4-8a7849615d38',
                timestamp: '2021-06-26T16:11:22.335+05:30',
                properties: {
                  array: [1, 2, 3],
                  nested: { json: 'test' },
                  status: 'testing',
                  description: 'Example track call',
                  fullyNested: [
                    { a: 1, b: 2 },
                    { a: 1, b: [1, 2, 3] },
                  ],
                },
                receivedAt: '2021-06-26T16:11:22.335+05:30',
                request_ip: '[::1]',
                anonymousId: '1585ea2f-dddc-4d23-935f-c1196405d61e',
                integrations: { All: true },
                originalTimestamp: '2021-06-26T10:41:22.316Z',
              },
              metadata: {
                userId: 'a27a8a8a-9e81-4898-beeb-e6041fc1552d',
                jobId: 2,
                sourceId: '1s9eG8UCer6YSKsD8ZlQCyLa3pj',
                destinationId: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                attemptNum: 0,
                receivedAt: '2021-06-26T16:11:22.335+05:30',
                createdAt: '2021-06-26T10:41:24.126Z',
                firstAttemptedAt: '',
                transformAt: 'router',
              },
              destination: {
                ID: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                Name: 'gainsight-px-dest',
                DestinationDefinition: {
                  ID: '1uLuOdwPCqtei55ZKXewwPhjQPf',
                  Name: 'GAINSIGHT_PX',
                  DisplayName: 'Gainsight PX',
                  Config: {
                    destConfig: {
                      defaultConfig: [
                        'apiKey',
                        'productTagKey',
                        'userAttributeMap',
                        'accountAttributeMap',
                        'globalContextMap',
                      ],
                    },
                    excludeKeys: [],
                    includeKeys: [],
                    saveDestinationResponse: true,
                    secretKeys: ['apiKey', 'productTagKey'],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                      'flutter',
                    ],
                    transformAt: 'router',
                    transformAtV1: 'router',
                  },
                  ResponseRules: {},
                },
                Config: {
                  accountAttributeMap: [{ from: 'cultureCustomField', to: 'culture' }],
                  apiKey: 'sample-api-key',
                  eventDelivery: false,
                  eventDeliveryTS: 1624472902670,
                  globalContextMap: [{ from: 'kubrickTest', to: 'value' }],
                  productTagKey: 'AP-SAMPLE-2',
                  userAttributeMap: [{ from: 'hobbyCustomField', to: 'hobby' }],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
          destType: 'gainsight_px',
        },
      },
    },
    output: {
      response: {
        status: 200,
        body: {
          output: [
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'PUT',
                endpoint: 'https://api.aptrinsic.com/v1/users/stanley-kubrick',
                headers: {
                  'X-APTRINSIC-API-KEY': 'sample-api-key',
                  'Content-Type': 'application/json',
                },
                params: {},
                body: {
                  JSON: {
                    email: 'stanley@kubrick.com',
                    gender: 'MALE',
                    title: 'Director/Film Maker',
                    score: 100,
                    location: { countryName: 'USA', countryCode: 'US' },
                    firstName: 'Stanley',
                    lastName: 'Kubrick',
                    customAttributes: { hobby: 'Making films. Being a genius' },
                    propertyKeys: ['AP-SAMPLE-2'],
                    type: 'USER',
                  },
                  XML: {},
                  JSON_ARRAY: {},
                  FORM: {},
                },
                files: {},
              },
              metadata: [
                {
                  userId: '9a7820d0-0ff2-4451-b655-682cec15cbd2',
                  jobId: 1,
                  sourceId: '1s9eG8UCer6YSKsD8ZlQCyLa3pj',
                  destinationId: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                  attemptNum: 0,
                  receivedAt: '2021-06-25T14:29:52.911+05:30',
                  createdAt: '2021-06-25T08:59:56.329Z',
                  firstAttemptedAt: '',
                  transformAt: 'router',
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                Name: 'gainsight-px-dest',
                DestinationDefinition: {
                  ID: '1uLuOdwPCqtei55ZKXewwPhjQPf',
                  Name: 'GAINSIGHT_PX',
                  DisplayName: 'Gainsight PX',
                  Config: {
                    destConfig: {
                      defaultConfig: [
                        'apiKey',
                        'productTagKey',
                        'userAttributeMap',
                        'accountAttributeMap',
                        'globalContextMap',
                      ],
                    },
                    excludeKeys: [],
                    includeKeys: [],
                    saveDestinationResponse: true,
                    secretKeys: ['apiKey', 'productTagKey'],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                      'flutter',
                    ],
                    transformAt: 'router',
                    transformAtV1: 'router',
                  },
                  ResponseRules: {},
                },
                Config: {
                  accountAttributeMap: [{ from: 'cultureCustomField', to: 'culture' }],
                  apiKey: 'sample-api-key',
                  eventDelivery: false,
                  eventDeliveryTS: 1624472902670,
                  globalContextMap: [{ from: 'kubrickTest', to: 'value' }],
                  productTagKey: 'AP-SAMPLE-2',
                  userAttributeMap: [{ from: 'hobbyCustomField', to: 'hobby' }],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint: 'https://api.aptrinsic.com/v1/events/custom',
                headers: {
                  'X-APTRINSIC-API-KEY': 'sample-api-key',
                  'Content-Type': 'application/json',
                },
                params: {},
                body: {
                  JSON: {
                    identifyId: 'adifhas9734',
                    eventName: 'nested test2',
                    date: 1624704082335,
                    attributes: {
                      array: '[1,2,3]',
                      nested: '{"json":"test"}',
                      status: 'testing',
                      description: 'Example track call',
                      fullyNested: '[{"a":1,"b":2},{"a":1,"b":[1,2,3]}]',
                    },
                    url: 'file:///Users/anurajguha/workspace/simple-html-test/index.html',
                    referrer: '$direct',
                    propertyKey: 'AP-SAMPLE-2',
                    userType: 'USER',
                    globalContext: { kubrickTest: 'value' },
                  },
                  XML: {},
                  JSON_ARRAY: {},
                  FORM: {},
                },
                files: {},
              },
              metadata: [
                {
                  userId: 'a27a8a8a-9e81-4898-beeb-e6041fc1552d',
                  jobId: 2,
                  sourceId: '1s9eG8UCer6YSKsD8ZlQCyLa3pj',
                  destinationId: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                  attemptNum: 0,
                  receivedAt: '2021-06-26T16:11:22.335+05:30',
                  createdAt: '2021-06-26T10:41:24.126Z',
                  firstAttemptedAt: '',
                  transformAt: 'router',
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                Name: 'gainsight-px-dest',
                DestinationDefinition: {
                  ID: '1uLuOdwPCqtei55ZKXewwPhjQPf',
                  Name: 'GAINSIGHT_PX',
                  DisplayName: 'Gainsight PX',
                  Config: {
                    destConfig: {
                      defaultConfig: [
                        'apiKey',
                        'productTagKey',
                        'userAttributeMap',
                        'accountAttributeMap',
                        'globalContextMap',
                      ],
                    },
                    excludeKeys: [],
                    includeKeys: [],
                    saveDestinationResponse: true,
                    secretKeys: ['apiKey', 'productTagKey'],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                      'flutter',
                    ],
                    transformAt: 'router',
                    transformAtV1: 'router',
                  },
                  ResponseRules: {},
                },
                Config: {
                  accountAttributeMap: [{ from: 'cultureCustomField', to: 'culture' }],
                  apiKey: 'sample-api-key',
                  eventDelivery: false,
                  eventDeliveryTS: 1624472902670,
                  globalContextMap: [{ from: 'kubrickTest', to: 'value' }],
                  productTagKey: 'AP-SAMPLE-2',
                  userAttributeMap: [{ from: 'hobbyCustomField', to: 'hobby' }],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
        },
      },
    },
  },
  {
    name: 'gainsight_px',
    description: 'Test 1: Group call -- AxiosError thrown',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              message: {
                type: 'group',
                sentAt: '2024-02-16T06:00:54.075Z',
                traits: {
                  name: ',sleep(100)',
                  REGION: 'MEA',
                  USERID: 'myUId',
                  groupId: 'myGId',
                  CC_ADDED: true,
                  IBR_PLAN: 'free_ir',
                  LANGUAGE: 'EN',
                  gpt_setup: false,
                  ACCOUNT_ID: 'myGId',
                  EMAIL_TYPE: 'N/A',
                  WH_COUNTRY: 'MA',
                  snds_setup: false,
                  account_age: 417,
                  no_use_score: 0,
                  ACCOUNT_USERS: 10,
                  MONITORED_IPS: 0,
                  email_preview: 0,
                  growing_score: 0,
                  scaling_score: 0,
                  inboxing_score: 0,
                  learning_score: 0,
                  maturity_score: 0,
                  verified_count: 0,
                  education_score: 0,
                  '3MonthGrowthRate': 0,
                  '6MonthGrowthRate': 0,
                  TOTAL_SEED_TESTS: 0,
                  engagement_score: 0,
                  reputation_score: 0,
                  unverified_count: 0,
                  visibility_score: 0,
                  '12MonthGrowthRate': 0,
                  LAST_INVOICE_DATE: 1706810675000,
                  LAST_INVOICE_PLAN: 'foundation_trial',
                  bouncerate_30days: 0,
                  NUMBER_OF_CONTACTS: 0,
                  email_verifications: 0,
                  TOTAL_EMAIL_PREVIEWS: 0,
                  LAST_INVOICE_CURRENCY: 'USD',
                  LAST_INVOICE_MESSAGES: 0,
                  inbox_placement_tests: 0,
                  LAST_UPGRADE_TIMESTAMP: 0,
                  MONITORED_DOMAIN_NAMES: 0,
                  inboxready_signup_date: 1680254544705,
                  LAST_DOWNGRADE_TIMESTAMP: 0,
                  LAST_30_DAYS_MESSAGES_SENT: 0,
                  LAST_30_DAYS_VERIFICATIONS: 0,
                  LAST_INVOICE_DEDICATED_IPS: 0,
                  LAST_INVOICE_VERIFICATIONS: 0,
                  inboxplacementtests_30days: 0,
                },
                userId: 'myUId',
                channel: 'sources',
                context: {
                  sources: {
                    job_run_id: 'cn7fjonu4d9b3u706u2g',
                    task_run_id: 'cn7fjonu4d9b3u706u3g',
                  },
                },
                recordId: '41432',
                rudderId: 'c3f446d7-e0aa-4029-a465-df344c64b07b',
                timestamp: '2024-02-16T06:00:52.581Z',
                receivedAt: '2024-02-16T06:00:52.582Z',
                request_ip: '10.7.150.126',
                anonymousId: 'myUId',
                integrations: { limitAPIForGroup: true },
                originalTimestamp: '2024-02-16T06:00:54.075Z',
              },
              metadata: {
                userId: '9a7820d0-0ff2-4451-b655-682cec15cbd2',
                jobId: 1,
                sourceId: '1s9eG8UCer6YSKsD8ZlQCyLa3pj',
                destinationId: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                attemptNum: 0,
                receivedAt: '2021-06-25T14:29:52.911+05:30',
                createdAt: '2021-06-25T08:59:56.329Z',
                firstAttemptedAt: '',
                transformAt: 'router',
              },
              destination: {
                ID: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                Name: 'gainsight-px-dest',
                DestinationDefinition: {
                  ID: '1uLuOdwPCqtei55ZKXewwPhjQPf',
                  Name: 'GAINSIGHT_PX',
                  DisplayName: 'Gainsight PX',
                  Config: {
                    destConfig: {
                      defaultConfig: [
                        'apiKey',
                        'productTagKey',
                        'userAttributeMap',
                        'accountAttributeMap',
                        'globalContextMap',
                      ],
                    },
                    excludeKeys: [],
                    includeKeys: [],
                    saveDestinationResponse: true,
                    secretKeys: ['apiKey', 'productTagKey'],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                      'flutter',
                    ],
                    transformAt: 'router',
                    transformAtV1: 'router',
                  },
                  ResponseRules: {},
                },
                Config: {
                  accountAttributeMap: [
                    { from: 'LAST_INVOICE_DATE', to: 'last_invoice_date' },
                    { from: 'LAST_INVOICE_MESSAGES', to: 'last_invoice_messages' },
                    { from: 'LAST_INVOICE_PLAN', to: 'last_invoice_plan' },
                    { from: 'LAST_INVOICE_DEDICATED_IPS', to: 'last_invoice_dedicated_IPs' },
                    { from: 'LAST_INVOICE_VERIFICATIONS', to: 'last_invoice_verifications' },
                    { from: 'CC_ADDED', to: 'cc_added' },
                    { from: 'LAST_UPGRADE_TIMESTAMP', to: 'last_upgrade_timestamp' },
                    { from: 'LAST_30_DAYS_MESSAGES_SENT', to: 'last_30_days_messages_sent' },
                    { from: 'LAST_30_DAYS_VERIFICATIONS', to: 'last_30_days_verifications' },
                    { from: 'LAST_DOWNGRADE_TIMESTAMP', to: 'last_downgrade_timestamp' },
                    { from: 'LANGUAGE', to: 'language' },
                    { from: 'REGION', to: 'region2' },
                    { from: 'LAST_INVOICE_CURRENCY', to: 'last_invoice_currency' },
                    { from: 'NUMBER_OF_CONTACTS', to: 'number_of_contacts' },
                    { from: 'IBR_PLAN', to: 'ibr_plan' },
                    { from: 'EMAIL_TYPE', to: 'email_type' },
                    { from: 'WH_COUNTRY', to: 'wh_country' },
                    { from: 'verified_count', to: 'verified_domains' },
                    { from: 'unverified_count', to: 'unverified_domains' },
                    { from: 'account_users', to: 'account_users' },
                    { from: '12MonthGrowthRate', to: '12MonthGrowthRate' },
                    { from: '6MonthGrowthRate', to: '6MonthGrowthRate' },
                    { from: '3MonthGrowthRate', to: '3MonthGrowthRate' },
                    { to: 'monitored_ips', from: 'MONITORED_IPS' },
                    { to: 'monitored_domain_names', from: 'MONITORED_DOMAIN_NAMES' },
                    { to: 'total_email_previews', from: 'TOTAL_EMAIL_PREVIEWS' },
                    { to: 'total_seed_tests', from: 'TOTAL_SEED_TESTS' },
                    { from: 'visibility_score', to: 'visibility_score' },
                    { from: 'education_score', to: 'education_score' },
                    { from: 'inboxing_score', to: 'inboxing_score' },
                    { from: 'engagement_score', to: 'engagement_score' },
                    { from: 'reputation_score', to: 'reputation_score' },
                    { from: 'maturity_score', to: 'maturity_score' },
                    { from: 'scaling_score', to: 'scaling_score' },
                    { from: 'growing_score', to: 'growing_score' },
                    { from: 'no_use_score', to: 'no_use_score' },
                    { from: 'learning_score', to: 'learning_score' },
                    { from: 'email_verifications', to: 'email_verifications' },
                    { from: 'inbox_placement_tests', to: 'inbox_placement_tests' },
                    { from: 'email_preview', to: 'email_preview' },
                    { from: 'account_age', to: 'account_age' },
                    { from: 'inboxready_signup_date', to: 'inboxready_signup_date' },
                    { from: 'inboxplacementtests_30days', to: 'inboxplacementtests_30days' },
                    { from: 'bouncerate_30days', to: 'bouncerate_30days' },
                    { from: 'snds_setup', to: 'snds_setup' },
                    { from: 'gpt_setup', to: 'gpt_setup' },
                  ],
                  oneTrustCookieCategories: [],
                  apiKey: 'sample-api-key',
                  eventDelivery: false,
                  eventDeliveryTS: 1624472902670,
                  globalContextMap: [{ from: 'kubrickTest', to: 'value' }],
                  productTagKey: 'AP-SAMPLE-2',
                  userAttributeMap: [{ from: 'hobbyCustomField', to: 'hobby' }],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
          destType: 'gainsight_px',
        },
      },
    },
    output: {
      response: {
        status: 200,
        body: {
          output: [
            {
              error:
                '{"message":"error while fetching user: \\"<!doctype html><meta charset=\\\\\\"utf-8\\\\\\"><meta name=viewport content=\\\\\\"width=device-width, initial-scale=1\\\\\\"><title>403</title>403 Forbidden\\"","destinationResponse":"<!doctype html><meta charset=\\"utf-8\\"><meta name=viewport content=\\"width=device-width, initial-scale=1\\"><title>403</title>403 Forbidden"}',
              statTags: {
                destType: 'GAINSIGHT_PX',
                destinationId: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                errorCategory: 'network',
                errorType: 'aborted',
                feature: 'router',
                implementation: 'native',
                module: 'destination',
              },
              statusCode: 403,
              metadata: [
                {
                  userId: '9a7820d0-0ff2-4451-b655-682cec15cbd2',
                  jobId: 1,
                  sourceId: '1s9eG8UCer6YSKsD8ZlQCyLa3pj',
                  destinationId: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                  attemptNum: 0,
                  receivedAt: '2021-06-25T14:29:52.911+05:30',
                  createdAt: '2021-06-25T08:59:56.329Z',
                  firstAttemptedAt: '',
                  transformAt: 'router',
                },
              ],
              batched: false,
              destination: {
                ID: '1uLy1tqsoo9RhL1zLiqLQTKBIKL',
                Name: 'gainsight-px-dest',
                DestinationDefinition: {
                  ID: '1uLuOdwPCqtei55ZKXewwPhjQPf',
                  Name: 'GAINSIGHT_PX',
                  DisplayName: 'Gainsight PX',
                  Config: {
                    destConfig: {
                      defaultConfig: [
                        'apiKey',
                        'productTagKey',
                        'userAttributeMap',
                        'accountAttributeMap',
                        'globalContextMap',
                      ],
                    },
                    excludeKeys: [],
                    includeKeys: [],
                    saveDestinationResponse: true,
                    secretKeys: ['apiKey', 'productTagKey'],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                      'flutter',
                    ],
                    transformAt: 'router',
                    transformAtV1: 'router',
                  },
                  ResponseRules: {},
                },
                Config: {
                  accountAttributeMap: [
                    { from: 'LAST_INVOICE_DATE', to: 'last_invoice_date' },
                    { from: 'LAST_INVOICE_MESSAGES', to: 'last_invoice_messages' },
                    { from: 'LAST_INVOICE_PLAN', to: 'last_invoice_plan' },
                    { from: 'LAST_INVOICE_DEDICATED_IPS', to: 'last_invoice_dedicated_IPs' },
                    { from: 'LAST_INVOICE_VERIFICATIONS', to: 'last_invoice_verifications' },
                    { from: 'CC_ADDED', to: 'cc_added' },
                    { from: 'LAST_UPGRADE_TIMESTAMP', to: 'last_upgrade_timestamp' },
                    { from: 'LAST_30_DAYS_MESSAGES_SENT', to: 'last_30_days_messages_sent' },
                    { from: 'LAST_30_DAYS_VERIFICATIONS', to: 'last_30_days_verifications' },
                    { from: 'LAST_DOWNGRADE_TIMESTAMP', to: 'last_downgrade_timestamp' },
                    { from: 'LANGUAGE', to: 'language' },
                    { from: 'REGION', to: 'region2' },
                    { from: 'LAST_INVOICE_CURRENCY', to: 'last_invoice_currency' },
                    { from: 'NUMBER_OF_CONTACTS', to: 'number_of_contacts' },
                    { from: 'IBR_PLAN', to: 'ibr_plan' },
                    { from: 'EMAIL_TYPE', to: 'email_type' },
                    { from: 'WH_COUNTRY', to: 'wh_country' },
                    { from: 'verified_count', to: 'verified_domains' },
                    { from: 'unverified_count', to: 'unverified_domains' },
                    { from: 'account_users', to: 'account_users' },
                    { from: '12MonthGrowthRate', to: '12MonthGrowthRate' },
                    { from: '6MonthGrowthRate', to: '6MonthGrowthRate' },
                    { from: '3MonthGrowthRate', to: '3MonthGrowthRate' },
                    { to: 'monitored_ips', from: 'MONITORED_IPS' },
                    { to: 'monitored_domain_names', from: 'MONITORED_DOMAIN_NAMES' },
                    { to: 'total_email_previews', from: 'TOTAL_EMAIL_PREVIEWS' },
                    { to: 'total_seed_tests', from: 'TOTAL_SEED_TESTS' },
                    { from: 'visibility_score', to: 'visibility_score' },
                    { from: 'education_score', to: 'education_score' },
                    { from: 'inboxing_score', to: 'inboxing_score' },
                    { from: 'engagement_score', to: 'engagement_score' },
                    { from: 'reputation_score', to: 'reputation_score' },
                    { from: 'maturity_score', to: 'maturity_score' },
                    { from: 'scaling_score', to: 'scaling_score' },
                    { from: 'growing_score', to: 'growing_score' },
                    { from: 'no_use_score', to: 'no_use_score' },
                    { from: 'learning_score', to: 'learning_score' },
                    { from: 'email_verifications', to: 'email_verifications' },
                    { from: 'inbox_placement_tests', to: 'inbox_placement_tests' },
                    { from: 'email_preview', to: 'email_preview' },
                    { from: 'account_age', to: 'account_age' },
                    { from: 'inboxready_signup_date', to: 'inboxready_signup_date' },
                    { from: 'inboxplacementtests_30days', to: 'inboxplacementtests_30days' },
                    { from: 'bouncerate_30days', to: 'bouncerate_30days' },
                    { from: 'snds_setup', to: 'snds_setup' },
                    { from: 'gpt_setup', to: 'gpt_setup' },
                  ],
                  oneTrustCookieCategories: [],
                  apiKey: 'sample-api-key',
                  eventDelivery: false,
                  eventDeliveryTS: 1624472902670,
                  globalContextMap: [{ from: 'kubrickTest', to: 'value' }],
                  productTagKey: 'AP-SAMPLE-2',
                  userAttributeMap: [{ from: 'hobbyCustomField', to: 'hobby' }],
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
        },
      },
    },
  },
];
