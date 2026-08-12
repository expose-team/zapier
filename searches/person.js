const { performSearch } = require("../utils");

module.exports = {
  key: "person",
  noun: "Person",
  display: {
    label: "Find Person",
    description: "Finds a person by email, phone, or LinkedIn profile URL.",
  },
  operation: {
    // Don't let Zapier auto-trim/cast our string inputs — keep behavior predictable.
    cleanInputData: false,
    inputFields: [
      { key: "email", label: "Email", type: "string", helpText: "The person's email address." },
      { key: "phone", label: "Phone", type: "string", helpText: "The person's phone number." },
      { key: "profile_url", label: "Profile URL", type: "string", helpText: "The person's LinkedIn (or other) profile URL." },
    ],
    perform: performSearch("person"),
    sample: {
      id: "sample-person-id",
      full_name: "Jane Doe",
      email: "jane.doe@example.com",
      profile_url: "https://www.linkedin.com/in/janedoe",
      company: "Acme Inc.",
      title: "Product Manager",
    },
  },
};
