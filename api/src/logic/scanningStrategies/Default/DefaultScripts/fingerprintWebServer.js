const fetch = require("node-fetch");
const { clean } = require("../../../../helpers/headers");

exports.check = async (url) => {
  const testURL = `${url}/ugQOfG19G7s0*L2lBqM@PjX`;
  const response = await fetch(testURL);
  const siteHeaders = clean(response.headers.raw());
  const results = [];
  const headers = ["server", "x-powered-by"];
  for (const header of headers) {
    if (siteHeaders[header])
      results.push({
        header,
        value: headers[header].join(),
        result: "blocked",
      });
  }

  if (response.status !== 200) {
    const { length } = await response.text();
    if (length > 200) {
      results.push({
        url: testURL,
        value: "No default error",
        result: "passed",
      });
    } else {
      results.push({
        url: testURL,
        value: "Default error probability",
        result: "failed",
      });
    }
  }

  return results;
};
