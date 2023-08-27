const fetch = require("node-fetch");
const WORDPRESS_VERSION_API =
  "https://api.wordpress.org/core/version-check/1.7/";

exports.get = async () => {
  const response = await fetch(WORDPRESS_VERSION_API);
  const version = (await response.json()).offers[0].current;
  return version;
};
