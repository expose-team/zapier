const { performSearch } = require("../utils");

module.exports = {
  key: "school",
  noun: "School",
  display: {
    label: "Find School",
    description: "Finds a school by domain or profile URL.",
  },
  operation: {
    // Don't let Zapier auto-trim/cast our string inputs — keep behavior predictable.
    cleanInputData: false,
    inputFields: [
      { key: "domain", label: "Domain", type: "string", helpText: "The school's website domain, e.g. stanford.edu." },
      { key: "profile_url", label: "Profile URL", type: "string", helpText: "The school's LinkedIn (or other) profile URL." },
    ],
    perform: performSearch("school"),
    sample: {
      id: "sample-school-id",
      name: "Stanford University",
      domain: "stanford.edu",
      profile_url: "https://www.linkedin.com/school/stanford-university",
    },
  },
};
