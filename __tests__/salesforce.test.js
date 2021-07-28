jest.mock("axios");
const integration = "salesforce";
const name = "Salesforce";
const version = "v0";

const fs = require("fs");
const path = require("path");

const transformer = require(`../${version}/destinations/${integration}/transform`);

// Processor Test files
const inputDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_input.json`)
);
const outputDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_output.json`)
);
const inputData = JSON.parse(inputDataFile);
const expectedData = JSON.parse(outputDataFile);

// Router Test files
const inputRouterDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_router_input.json`)
);
const outputRouterDataFile = fs.readFileSync(
  path.resolve(__dirname, `./data/${integration}_router_output.json`)
);
const inputRouterData = JSON.parse(inputRouterDataFile);
const expectedRouterData = JSON.parse(outputRouterDataFile);

describe(`${name} Tests`, () => {
  describe("Processor", () => {
    inputData.forEach(async (input, index) => {
      it(`Payload - ${index}`, async () => {
        try {
          const output = await transformer.process(input);
          if(index == 8) {
            console.log(JSON.stringify(output));
            console.log(JSON.stringify(expectedData[8]))
          }
          expect(output).toEqual(expectedData[index]);
        } catch (error) {
          expect(error.message).toEqual(expectedData[index].error);
        }
      });
    });
  });

  describe("Router Tests", () => {
    it("Payload", async () => {
      const routerOutput = await transformer.processRouterDest(inputRouterData);
      expect(routerOutput).toEqual(expectedRouterData);
    });
  });
});
