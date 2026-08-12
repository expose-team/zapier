const should = require("should");
const zapier = require("zapier-platform-core");

const App = require("../index");
const appTester = zapier.createAppTester(App);

// These specs hit the real expose.team API, so they only run when a live key is provided —
// set EXPOSE_API_KEY to exercise them locally (e.g. `EXPOSE_API_KEY=... npm test`).
const describeIfKey = process.env.EXPOSE_API_KEY ? describe : describe.skip;

describe("authentication", () => {
  describeIfKey("with a real API key", () => {
    it("should validate a good key and return the account", async () => {
      const bundle = { authData: { apiKey: process.env.EXPOSE_API_KEY } };
      const result = await appTester(App.authentication.test, bundle);
      should.exist(result.json.email);
    });
  });

  it("should reject an invalid key", async () => {
    const bundle = { authData: { apiKey: "not-a-real-key" } };
    let error;
    try {
      await appTester(App.authentication.test, bundle);
    } catch (e) {
      error = e;
    }
    should.exist(error);
    error.message.should.match(/Invalid API key/);
  });
});
