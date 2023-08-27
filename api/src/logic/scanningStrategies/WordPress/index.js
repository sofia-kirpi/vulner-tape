const Description = require("../../../models/Description");
const checkWordPressVersion = require("./WordPressScripts/checkWordPressVersion");
const checkPluginsVersions = require("./WordPressScripts/checkPluginsVersions");
const checkThemesVersions = require("./WordPressScripts/checkThemesVersions");
const checkForgettenDirectories = require("./WordPressScripts/checkForgottenDirectories");
const checkAdminInterfaces = require("./WordPressScripts/checkAdminInterfaces");

const algorithms = [
  { handler: checkWordPressVersion.check, uniqueKey: "wordpress-1" },
  { handler: checkPluginsVersions.check, uniqueKey: "wordpress-2" },
  { handler: checkThemesVersions.check, uniqueKey: "wordpress-3" },
  { handler: checkForgettenDirectories.check, uniqueKey: "wordpress-4" },
  {
    handler: checkAdminInterfaces.check,
    uniqueKey: "wordpress-5",
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
