const fetch = require("node-fetch");
const { clean } = require("../../../../helpers/headers");

exports.check = async (url) => {
  const methodsHeaders = ["allow", "access-control-allow-methods"];
  const response = await fetch(url, { method: "OPTIONS" });
  const headers = clean(response.headers.raw());
  const results = [];
  for (const header of methodsHeaders) {
    if (headers[header]) {
      results.push({ header, value: headers[header] });
    } else {
      results.push({ header, value: "unknown" });
    }
  }
  return results;
};
