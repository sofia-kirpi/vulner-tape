const fetch = require("node-fetch");
const { clean } = require("../../../../helpers/headers");

const informationHeaders = ["x-powered-by"];

exports.check = async (url) => {
  const response = await fetch(url);
  const headers = clean(response.headers.raw());
  const results = [];
  for (const header of informationHeaders) {
    if (headers[header])
      results.push({ header, value: headers[header].join(), result: "failed" });
  }
  return results;
};
