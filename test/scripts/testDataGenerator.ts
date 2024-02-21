import path from 'path';
import { TestCaseData } from '../integrations/testTypes';
import { getTestData, getTestDataFilePaths, produceTestData } from '../integrations/testUtils';
import { Command } from 'commander';
import axios from 'axios';
import * as fs from 'fs';

// Produces test data for a given destination
// Example usage
// npx ts-node test/scripts/testDataGenerator.ts --destination=klaviyo --feature=processor

const command = new Command();
command
  .allowUnknownOption()
  .option('-d, --destination <string>', 'Enter Destination Name')
  .option('-f, --feature <string>', 'Enter Feature Name(processor, router)')
  .option('-i, --index <number>', 'Enter Test index')
  .option('-id, --id <string>', 'Enter unique "Id" of the test case you want to run')
  .option('-dp, --dataPlane <string>', 'Enter Data Plane URL')
  .option('-wk, --writeKey <string>', 'Enter Write Key')
  .parse();

const opts = command.opts();

if (opts.destination === undefined) {
  throw new Error('Destination is not provided');
}

const rootDir = __dirname;
const resolvedpath = path.resolve(rootDir, '../integrations');
const destinationTestDataPaths = getTestDataFilePaths(resolvedpath, opts);

destinationTestDataPaths.forEach((testDataPath) => {
  let testData: TestCaseData[] = getTestData(testDataPath);
  if (opts.index !== undefined) {
    testData = [testData[parseInt(opts.index)]];
  }
  if (opts.id) {
    testData = testData.filter((data) => {
      if (data['id'] === opts.id) {
        return true;
      }
      return false;
    });
  }
  produceTestData(testData);

  if (opts.dataPlane && opts.writeKey) {
    // read file ../../temp/test_data.json

    const resolvedpathForData = path.resolve(rootDir, '../../temp/test_data.json');

    fs.readFile(resolvedpathForData, 'utf8', function (err, data) {
      if (err) {
        console.log(err);
      } else {
        const parsedData = JSON.parse(data);
        axios
          .post(
            `${opts.dataPlane}/v1/batch`,
            {
              batch: parsedData,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${opts.writeKey}`,
              },
            },
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
});
