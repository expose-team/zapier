const authentication = require("./authentication");
const { includeApiKey } = require("./utils");

const person = require("./searches/person");
const company = require("./searches/company");
const school = require("./searches/school");

const addAuthHeader = (request, z, bundle) => includeApiKey(request, z, bundle);

const handleErrors = (response, z, bundle) => {
  if (response.status === 401) {
    throw new z.errors.Error("Invalid API key. Check your key on your expose access dashboard.", "AuthenticationError", response.status);
  }
  if (response.status === 402) {
    throw new z.errors.Error("You're out of Expose.team credits (or don't have an active subscription).", "InsufficientCredits", response.status);
  }
  response.throwForStatus();
  return response;
};

module.exports = {
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,

  authentication,

  beforeRequest: [addAuthHeader],
  afterResponse: [handleErrors],

  triggers: {},
  searches: {
    [person.key]: person,
    [company.key]: company,
    [school.key]: school,
  },
  creates: {},
};
