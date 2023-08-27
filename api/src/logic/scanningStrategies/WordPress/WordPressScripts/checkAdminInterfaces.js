const { dirb, analyzeAll } = require("../../../../helpers/dirb");

exports.check = async (url) => {
  const data = await dirb(url, "WordPressAdmin.txt");
  return await analyzeAll(data);
};
