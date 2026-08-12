const API_BASE = "https://expose.team/api";

// Every request needs the user's API key attached — this saves each search from repeating it.
const includeApiKey = (request, z, bundle) => {
  request.headers = request.headers || {};
  request.headers["x-api-key"] = bundle.authData.apiKey;
  return request;
};

// Expose's search endpoint returns `{ data }`, where `data` may be a single match (object) or
// a list of matches, depending on how many results came back. Zapier searches always need an
// array of objects, each with a stable `id`, so normalize both shapes into that.
const normalizeResults = (data) => {
  if (!data) return [];
  const results = Array.isArray(data) ? data : [data];
  return results.map((result, index) => ({
    id: result.id || result.profile_url || result.domain || result.email || String(index),
    ...result,
  }));
};

const performSearch = (type) => async (z, bundle) => {
  const response = await z.request({
    url: `${API_BASE}/search`,
    params: { type, ...bundle.inputData },
  });
  return normalizeResults(response.data.data);
};

module.exports = { API_BASE, includeApiKey, normalizeResults, performSearch };
