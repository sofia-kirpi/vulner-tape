const fetch = require("node-fetch");

exports.get = async (name) => {
  const WORDPRESS_THEME_VERSION_API = `https://api.wordpress.org/themes/info/1.1/?action=theme_information&request[slug]=${name}`;
  const response = await fetch(WORDPRESS_THEME_VERSION_API);
  return (await response.json()).version;
};
