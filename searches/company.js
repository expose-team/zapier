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
    // Mirrors the real /search?type=company response shape, so Zapier's field mapper
    // offers the right nested paths (names[].first_name, profiles[].url, etc).
    sample: {
      id: "sampleCompanyId01",
      updated_at: null,
      created_at: "2026-02-16T19:48:03.000Z",
      domain: "acme.com",
      is_school: false,
      type: null,
      company_size: null,
      company_size_range: "51-200",
      founded: 2015,
      semrush_global_rank: null,
      stock_symbol: null,
      stock_exchange: null,
      titles: ["building the future of widgets"],
      specialities: ["widgets", "logistics software"],
      technologies: [],
      industries: [{ name: "SOFTWARE_DEVELOPMENT" }],
      names: [{ first_name: "acme inc", middle_name: null, last_name: null, source: "linkedin" }],
      profiles: [
        {
          created_at: "2026-02-16T19:48:03.000Z",
          profile_created_at: null,
          type: "company",
          profile_id: null,
          network: "linkedin",
          username: "acme",
          url: "linkedin.com/company/acme",
          profile_picture: null,
          cover_picture: null,
          verified: null,
          private: null,
          followers_count: null,
          following_count: null,
          posts_count: null,
          groups_count: null,
          favourites_count: null,
          description: null,
        },
      ],
      lighthouse_scores: [],
      locations: [{ address: null, region: null, zip: null, time_zone: null, network: "internal", city: "san francisco", country: "united states", continent: null, state: "ca" }],
      repositories: [],
      websites: ["https://www.acme.com"],
      patents: [],
    },
  },
};
