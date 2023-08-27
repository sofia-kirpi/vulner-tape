const fetch = require("node-fetch");
const { clean } = require("../../../../helpers/headers");

const securityHeaders = [
  "strict-transport-security",
  "content‑security‑policy",
];

exports.check = async (url) => {
  const response = await fetch(url);
  const headers = clean(response.headers.raw());
  const results = [];
  for (const header of securityHeaders) {
    if (headers[header])
      results.push({ header, value: headers[header].join(), result: "passed" });
    else results.push({ header, value: "unknown", result: "failed" });
  }
  return results;
};
