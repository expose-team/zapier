const API_BASE = "https://expose.team/api";

const test = (z, bundle) =>
  z.request({
    url: `${API_BASE}/api-key`,
    headers: { "x-api-key": bundle.authData.apiKey },
  });

module.exports = {
  type: "custom",
  fields: [
    {
      key: "apiKey",
      label: "API Key",
      required: true,
      type: "password",
      helpText: "Find your API key on your [expose access dashboard](https://expose.team/platform/access/api).",
    },
  ],
  test,
  connectionLabel: "{{json.name}} ({{json.email}})",
};
