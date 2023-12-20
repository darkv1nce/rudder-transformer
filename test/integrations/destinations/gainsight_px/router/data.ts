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
                            "message": {
                                "type": "identify",
                                "sentAt": "2021-06-25T08:59:52.891Z",
                                "userId": "stanley-kubrick",
                                "channel": "web",
                                "context": {
                                    "os": {
                                        "name": "",
                                        "version": ""
                                    },
                                    "app": {
                                        "name": "RudderLabs JavaScript SDK",
                                        "build": "1.0.0",
                                        "version": "1.1.18",
                                        "namespace": "com.rudderlabs.javascript"
                                    },
                                    "page": {
                                        "title": "Test",
                                        "search": "",
                                        "path": "index.html",
                                        "url": "http://127.0.0.1:3003/index.html",
                                        "tab_url": "http://127.0.0.1:3003/index.html",
                                        "referrer": "$direct",
                                        "initial_referrer": "$direct",
                                        "referring_domain": "",
                                        "initial_referring_domain": ""
                                    },
                                    "locale": "en-GB",
                                    "screen": {
                                        "width": 1920,
                                        "height": 1080,
                                        "density": 1,
                                        "innerWidth": 1920,
                                        "innerHeight": 436
                                    },
                                    "traits": {
                                        "name": "Stanley Kubrick",
                                        "email": "stanley@kubrick.com",
                                        "score": 100,
                                        "title": "Director/Film Maker",
                                        "gender": "Male",
                                        "countryCode": "US",
                                        "countryName": "USA",
                                        "hobbyCustomField": "Making films. Being a genius"
                                    },
                                    "library": {
                                        "name": "RudderLabs JavaScript SDK",
                                        "version": "1.1.18"
                                    },
                                    "campaign": {},
                                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
                                },
                                "rudderId": "9a7820d0-0ff2-4451-b655-682cec15cbd2",
                                "messageId": "ff90d62e-a6e3-4e23-af20-03b4a249ef48",
                                "timestamp": "2021-06-25T14:29:52.911+05:30",
                                "receivedAt": "2021-06-25T14:29:52.911+05:30",
                                "request_ip": "[::1]",
                                "anonymousId": "1585ea2f-dddc-4d23-935f-c1196405d61e",
                                "integrations": {
                                    "All": true
                                },
                                "originalTimestamp": "2021-06-25T08:59:52.891Z"
                            },
                            "metadata": {
                                "userId": "9a7820d0-0ff2-4451-b655-682cec15cbd2",
                                "jobId": 1,
                                "sourceId": "1s9eG8UCer6YSKsD8ZlQCyLa3pj",
                                "destinationId": "1uLy1tqsoo9RhL1zLiqLQTKBIKL",
                                "attemptNum": 0,
                                "receivedAt": "2021-06-25T14:29:52.911+05:30",
                                "createdAt": "2021-06-25T08:59:56.329Z",
                                "firstAttemptedAt": "",
                                "transformAt": "router"
                            },
                            "destination": {
                                "ID": "1uLy1tqsoo9RhL1zLiqLQTKBIKL",
                                "Name": "gainsight-px-dest",
                                "DestinationDefinition": {
                                    "ID": "1uLuOdwPCqtei55ZKXewwPhjQPf",
                                    "Name": "GAINSIGHT_PX",
                                    "DisplayName": "Gainsight PX",
                                    "Config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "apiKey",
                                                "productTagKey",
                                                "userAttributeMap",
                                                "accountAttributeMap",
                                                "globalContextMap"
                                            ]
                                        },
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "saveDestinationResponse": true,
                                        "secretKeys": ["apiKey", "productTagKey"],
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative",
                                            "flutter"
                                        ],
                                        "transformAt": "router",
                                        "transformAtV1": "router"
                                    },
                                    "ResponseRules": {}
                                },
                                "Config": {
                                    "accountAttributeMap": [
                                        {
                                            "from": "cultureCustomField",
                                            "to": "culture"
                                        }
                                    ],
                                    "apiKey": "sample-api-key",
                                    "eventDelivery": false,
                                    "eventDeliveryTS": 1624472902670,
                                    "globalContextMap": [
                                        {
                                            "from": "kubrickTest",
                                            "to": "value"
                                        }
                                    ],
                                    "productTagKey": "AP-SAMPLE-2",
                                    "userAttributeMap": [
                                        {
                                            "from": "hobbyCustomField",
                                            "to": "hobby"
                                        }
                                    ]
                                },
                                "Enabled": true,
                                "Transformations": [],
                                "IsProcessorEnabled": true
                            }
                        },
                        {
                            "message": {
                                "type": "track",
                                "event": "nested test2",
                                "sentAt": "2021-06-26T10:41:22.316Z",
                                "userId": "adifhas9734",
                                "channel": "web",
                                "context": {
                                    "os": {
                                        "name": "",
                                        "version": ""
                                    },
                                    "app": {
                                        "name": "RudderLabs JavaScript SDK",
                                        "build": "1.0.0",
                                        "version": "1.1.18",
                                        "namespace": "com.rudderlabs.javascript"
                                    },
                                    "page": {
                                        "url": "file:///Users/anurajguha/workspace/simple-html-test/index.html",
                                        "path": "/Users/anurajguha/workspace/simple-html-test/index.html",
                                        "title": "Test",
                                        "search": "",
                                        "tab_url": "file:///Users/anurajguha/workspace/simple-html-test/index.html",
                                        "referrer": "$direct",
                                        "initial_referrer": "$direct",
                                        "referring_domain": "",
                                        "initial_referring_domain": ""
                                    },
                                    "locale": "en-GB",
                                    "screen": {
                                        "width": 1920,
                                        "height": 1080,
                                        "density": 1,
                                        "innerWidth": 1920,
                                        "innerHeight": 585
                                    },
                                    "traits": {
                                        "name": "Update test unique",
                                        "phone": "9900990899",
                                        "lastname": "user6",
                                        "firstname": "test",
                                        "previousCompany": "testprevCompany2"
                                    },
                                    "library": {
                                        "name": "RudderLabs JavaScript SDK",
                                        "version": "1.1.18"
                                    },
                                    "campaign": {},
                                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
                                },
                                "rudderId": "a27a8a8a-9e81-4898-beeb-e6041fc1552d",
                                "messageId": "595dae36-5e4f-4feb-a2e4-8a7849615d38",
                                "timestamp": "2021-06-26T16:11:22.335+05:30",
                                "properties": {
                                    "array": [1, 2, 3],
                                    "nested": {
                                        "json": "test"
                                    },
                                    "status": "testing",
                                    "description": "Example track call",
                                    "fullyNested": [
                                        {
                                            "a": 1,
                                            "b": 2
                                        },
                                        {
                                            "a": 1,
                                            "b": [1, 2, 3]
                                        }
                                    ]
                                },
                                "receivedAt": "2021-06-26T16:11:22.335+05:30",
                                "request_ip": "[::1]",
                                "anonymousId": "1585ea2f-dddc-4d23-935f-c1196405d61e",
                                "integrations": {
                                    "All": true
                                },
                                "originalTimestamp": "2021-06-26T10:41:22.316Z"
                            },
                            "metadata": {
                                "userId": "a27a8a8a-9e81-4898-beeb-e6041fc1552d",
                                "jobId": 2,
                                "sourceId": "1s9eG8UCer6YSKsD8ZlQCyLa3pj",
                                "destinationId": "1uLy1tqsoo9RhL1zLiqLQTKBIKL",
                                "attemptNum": 0,
                                "receivedAt": "2021-06-26T16:11:22.335+05:30",
                                "createdAt": "2021-06-26T10:41:24.126Z",
                                "firstAttemptedAt": "",
                                "transformAt": "router"
                            },
                            "destination": {
                                "ID": "1uLy1tqsoo9RhL1zLiqLQTKBIKL",
                                "Name": "gainsight-px-dest",
                                "DestinationDefinition": {
                                    "ID": "1uLuOdwPCqtei55ZKXewwPhjQPf",
                                    "Name": "GAINSIGHT_PX",
                                    "DisplayName": "Gainsight PX",
                                    "Config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "apiKey",
                                                "productTagKey",
                                                "userAttributeMap",
                                                "accountAttributeMap",
                                                "globalContextMap"
                                            ]
                                        },
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "saveDestinationResponse": true,
                                        "secretKeys": ["apiKey", "productTagKey"],
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative",
                                            "flutter"
                                        ],
                                        "transformAt": "router",
                                        "transformAtV1": "router"
                                    },
                                    "ResponseRules": {}
                                },
                                "Config": {
                                    "accountAttributeMap": [
                                        {
                                            "from": "cultureCustomField",
                                            "to": "culture"
                                        }
                                    ],
                                    "apiKey": "sample-api-key",
                                    "eventDelivery": false,
                                    "eventDeliveryTS": 1624472902670,
                                    "globalContextMap": [
                                        {
                                            "from": "kubrickTest",
                                            "to": "value"
                                        }
                                    ],
                                    "productTagKey": "AP-SAMPLE-2",
                                    "userAttributeMap": [
                                        {
                                            "from": "hobbyCustomField",
                                            "to": "hobby"
                                        }
                                    ]
                                },
                                "Enabled": true,
                                "Transformations": [],
                                "IsProcessorEnabled": true
                            }
                        }
                    ]
                    ,
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
                            "batchedRequest": {
                                "version": "1",
                                "type": "REST",
                                "method": "PUT",
                                "endpoint": "https://api.aptrinsic.com/v1/users/stanley-kubrick",
                                "headers": {
                                    "X-APTRINSIC-API-KEY": "sample-api-key",
                                    "Content-Type": "application/json"
                                },
                                "params": {},
                                "body": {
                                    "JSON": {
                                        "email": "stanley@kubrick.com",
                                        "gender": "MALE",
                                        "signUpDate": 1624611592911,
                                        "title": "Director/Film Maker",
                                        "score": 100,
                                        "createDate": 1624611592911,
                                        "location": {
                                            "countryName": "USA",
                                            "countryCode": "US"
                                        },
                                        "firstName": "Stanley",
                                        "lastName": "Kubrick",
                                        "customAttributes": {
                                            "hobby": "Making films. Being a genius"
                                        },
                                        "propertyKeys": ["AP-SAMPLE-2"],
                                        "type": "USER"
                                    },
                                    "XML": {},
                                    "JSON_ARRAY": {},
                                    "FORM": {}
                                },
                                "files": {}
                            },
                            "metadata": [
                                {
                                    "userId": "9a7820d0-0ff2-4451-b655-682cec15cbd2",
                                    "jobId": 1,
                                    "sourceId": "1s9eG8UCer6YSKsD8ZlQCyLa3pj",
                                    "destinationId": "1uLy1tqsoo9RhL1zLiqLQTKBIKL",
                                    "attemptNum": 0,
                                    "receivedAt": "2021-06-25T14:29:52.911+05:30",
                                    "createdAt": "2021-06-25T08:59:56.329Z",
                                    "firstAttemptedAt": "",
                                    "transformAt": "router"
                                }
                            ],
                            "batched": false,
                            "statusCode": 200,
                            "destination": {
                                "ID": "1uLy1tqsoo9RhL1zLiqLQTKBIKL",
                                "Name": "gainsight-px-dest",
                                "DestinationDefinition": {
                                    "ID": "1uLuOdwPCqtei55ZKXewwPhjQPf",
                                    "Name": "GAINSIGHT_PX",
                                    "DisplayName": "Gainsight PX",
                                    "Config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "apiKey",
                                                "productTagKey",
                                                "userAttributeMap",
                                                "accountAttributeMap",
                                                "globalContextMap"
                                            ]
                                        },
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "saveDestinationResponse": true,
                                        "secretKeys": ["apiKey", "productTagKey"],
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative",
                                            "flutter"
                                        ],
                                        "transformAt": "router",
                                        "transformAtV1": "router"
                                    },
                                    "ResponseRules": {}
                                },
                                "Config": {
                                    "accountAttributeMap": [
                                        {
                                            "from": "cultureCustomField",
                                            "to": "culture"
                                        }
                                    ],
                                    "apiKey": "sample-api-key",
                                    "eventDelivery": false,
                                    "eventDeliveryTS": 1624472902670,
                                    "globalContextMap": [
                                        {
                                            "from": "kubrickTest",
                                            "to": "value"
                                        }
                                    ],
                                    "productTagKey": "AP-SAMPLE-2",
                                    "userAttributeMap": [
                                        {
                                            "from": "hobbyCustomField",
                                            "to": "hobby"
                                        }
                                    ]
                                },
                                "Enabled": true,
                                "Transformations": [],
                                "IsProcessorEnabled": true
                            }
                        },
                        {
                            "batchedRequest": {
                                "version": "1",
                                "type": "REST",
                                "method": "POST",
                                "endpoint": "https://api.aptrinsic.com/v1/events/custom",
                                "headers": {
                                    "X-APTRINSIC-API-KEY": "sample-api-key",
                                    "Content-Type": "application/json"
                                },
                                "params": {},
                                "body": {
                                    "JSON": {
                                        "identifyId": "adifhas9734",
                                        "eventName": "nested test2",
                                        "date": 1624704082335,
                                        "attributes": {
                                            "array": "[1,2,3]",
                                            "nested": "{\"json\":\"test\"}",
                                            "status": "testing",
                                            "description": "Example track call",
                                            "fullyNested": "[{\"a\":1,\"b\":2},{\"a\":1,\"b\":[1,2,3]}]"
                                        },
                                        "url": "file:///Users/anurajguha/workspace/simple-html-test/index.html",
                                        "referrer": "$direct",
                                        "propertyKey": "AP-SAMPLE-2",
                                        "userType": "USER",
                                        "globalContext": {
                                            "kubrickTest": "value"
                                        }
                                    },
                                    "XML": {},
                                    "JSON_ARRAY": {},
                                    "FORM": {}
                                },
                                "files": {}
                            },
                            "metadata": [
                                {
                                    "userId": "a27a8a8a-9e81-4898-beeb-e6041fc1552d",
                                    "jobId": 2,
                                    "sourceId": "1s9eG8UCer6YSKsD8ZlQCyLa3pj",
                                    "destinationId": "1uLy1tqsoo9RhL1zLiqLQTKBIKL",
                                    "attemptNum": 0,
                                    "receivedAt": "2021-06-26T16:11:22.335+05:30",
                                    "createdAt": "2021-06-26T10:41:24.126Z",
                                    "firstAttemptedAt": "",
                                    "transformAt": "router"
                                }
                            ],
                            "batched": false,
                            "statusCode": 200,
                            "destination": {
                                "ID": "1uLy1tqsoo9RhL1zLiqLQTKBIKL",
                                "Name": "gainsight-px-dest",
                                "DestinationDefinition": {
                                    "ID": "1uLuOdwPCqtei55ZKXewwPhjQPf",
                                    "Name": "GAINSIGHT_PX",
                                    "DisplayName": "Gainsight PX",
                                    "Config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "apiKey",
                                                "productTagKey",
                                                "userAttributeMap",
                                                "accountAttributeMap",
                                                "globalContextMap"
                                            ]
                                        },
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "saveDestinationResponse": true,
                                        "secretKeys": ["apiKey", "productTagKey"],
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative",
                                            "flutter"
                                        ],
                                        "transformAt": "router",
                                        "transformAtV1": "router"
                                    },
                                    "ResponseRules": {}
                                },
                                "Config": {
                                    "accountAttributeMap": [
                                        {
                                            "from": "cultureCustomField",
                                            "to": "culture"
                                        }
                                    ],
                                    "apiKey": "sample-api-key",
                                    "eventDelivery": false,
                                    "eventDeliveryTS": 1624472902670,
                                    "globalContextMap": [
                                        {
                                            "from": "kubrickTest",
                                            "to": "value"
                                        }
                                    ],
                                    "productTagKey": "AP-SAMPLE-2",
                                    "userAttributeMap": [
                                        {
                                            "from": "hobbyCustomField",
                                            "to": "hobby"
                                        }
                                    ]
                                },
                                "Enabled": true,
                                "Transformations": [],
                                "IsProcessorEnabled": true
                            }
                        }
                    ],
                },
            },
        },
    },
];
