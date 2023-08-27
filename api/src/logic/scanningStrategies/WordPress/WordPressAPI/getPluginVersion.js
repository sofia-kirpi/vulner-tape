const fetch = require("node-fetch");

exports.get = async (name) => {
  const WORDPRESS_PLUGIN_VERSION_API = `https://api.wordpress.org/plugins/info/1.0/${name}.json`;
  const response = await fetch(WORDPRESS_PLUGIN_VERSION_API);
  return (await response.json()).version;
};
