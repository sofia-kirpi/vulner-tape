const fetch = require("node-fetch");
const getThemeVersion = require("../WordPressAPI/getThemeVersion");

exports.check = async (url) => {
  url = url[url.length - 1] === "/"? url : url + "/";
  const response = await fetch(url);
  const page = await response.text();
  const THEME_REGEXP = new RegExp(`(?<=${url}wp-content/themes/).{40}?`, "g");

  const themes = Array.from(
    new Set(
      ((await page.match(THEME_REGEXP)) || []).map((item) => {
        return item.split("/")[0];
      })
    )
  );

  const result = [];
  for (let theme of themes) {
    const version = await getThemeVersion.get(theme);
    result.push({
      theme,
      siteVersion: "unknown",
      originVersion: version,
      result: "blocked",
    });
  }

  return result;
};
