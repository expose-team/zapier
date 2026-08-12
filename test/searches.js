const should = require("should");
const zapier = require("zapier-platform-core");

const App = require("../index");
const appTester = zapier.createAppTester(App);

// Hits the real expose.team API and spends a credit, so only runs with a live key opted in.
const describeIfKey = process.env.EXPOSE_API_KEY ? describe : describe.skip;

describeIfKey("searches", () => {
  it("find person should return an array of matches", async () => {
    const bundle = {
      authData: { apiKey: process.env.EXPOSE_API_KEY },
      inputData: { email: process.env.EXPOSE_TEST_EMAIL || "jane.doe@example.com" },
    };
    const results = await appTester(App.searches.person.operation.perform, bundle);
    should(results).be.an.Array();
  });
});
