const { performSearch } = require("../utils");

module.exports = {
  key: "company",
  noun: "Company",
  display: {
    label: "Find Company",
    description: "Finds a company by domain or profile URL.",
  },
  operation: {
    // Don't let Zapier auto-trim/cast our string inputs — keep behavior predictable.
    cleanInputData: false,
    inputFields: [
      { key: "domain", label: "Domain", type: "string", helpText: "The company's website domain, e.g. acme.com." },
      { key: "profile_url", label: "Profile URL", type: "string", helpText: "The company's LinkedIn (or other) profile URL." },
    ],
    perform: performSearch("company"),
    sample: {
      id: "sample-company-id",
      name: "Acme Inc.",
      domain: "acme.com",
      profile_url: "https://www.linkedin.com/company/acme",
      industry: "Software",
      employee_count: 250,
    },
  },
};
