const Description = require("../../../models/Description");
const checkUsingHTTPS = require("./DefaultScripts/checkUsingHTTPS");
const fingerprintWebServer = require("./DefaultScripts/fingerprintWebServer");
const checkSecurityHeaders = require("./DefaultScripts/checkSecurityHeaders");
const checkHTTPMethods = require("./DefaultScripts/checkHTTPMethods");
const fingerprintWebApplication = require("./DefaultScripts/fingerprintWebApplication");

const algorithms = [
  { handler: checkUsingHTTPS.check, uniqueKey: "default-1" },
  { handler: fingerprintWebServer.check, uniqueKey: "default-2" },
  {
    handler: checkSecurityHeaders.check,
    uniqueKey: "default-3",
  },
  {
    handler: checkHTTPMethods.check,
    uniqueKey: "default-4",
  },
  {
    handler: fingerprintWebApplication.check,
    uniqueKey: "default-5",
  },
];

const decorator = async (data, uniqueKey) => {
  const { name, description } = await Description.findOne({
    where: { uniqueKey },
    rejectOnEmpty: true,
  });
  return { name, description, data };
};

exports.scan = async (url) => {
  const results = [];
  for (const { handler, uniqueKey } of algorithms) {
    let data;
    try {
      data = await handler(url);
      results.push(await decorator(data, uniqueKey));
    } catch (error) {
      console.log(error);
      continue;
    }
  }
  return results;
};
