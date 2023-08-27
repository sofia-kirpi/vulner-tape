const fetch = require("node-fetch");
const getWordPressVersion = require("../WordPressAPI/getWordPressVersion");
const GENERATOR_REGEXP = /(?<=<meta name="generator" content="WordPress )\d\.\d\.\d\d?/g;

exports.check = async (url) => {
  let originVersion, result;
  const response = await fetch(url);
  const page = await response.text();
  const [siteVersion] = (await page.match(GENERATOR_REGEXP)) || ["unknown"];

  try {
    originVersion = await getWordPressVersion.get();
  } catch (error) {
    console.log(error);
    originVersion = "unknown";
  }

  if (originVersion === "unknown" || siteVersion === "unknown") result = "blocked";
  else if (originVersion !== siteVersion) result = "failed";
  else result = "passed";

  return [{ siteVersion, originVersion, result }];
};
