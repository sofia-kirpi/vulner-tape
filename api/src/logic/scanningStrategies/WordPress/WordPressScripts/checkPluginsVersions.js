const fetch = require("node-fetch");
const getPluginsVersion = require("../WordPressAPI/getPluginVersion");

exports.check = async (url) => {
  url = url[url.length - 1] === "/"? url : url + "/";
  const response = await fetch(url);
  const page = await response.text();
  const PLUGIN_REGEXP = new RegExp(`(?<=${url}wp-content/plugins/).{40}?`, "g");

  const plugins = Array.from(
    new Set(
      (await (page.match(PLUGIN_REGEXP)) || []).map((item) => {
        return item.split("/")[0];
      })
    )
  );

  const result = [];
  for (let plugin of plugins) {
    const version = await getPluginsVersion.get(plugin);
    
    result.push({
      plugin,
      siteVersion: "unknown",
      originVersion: version,
      result: "blocked",
    });
  }

  return result;
};
