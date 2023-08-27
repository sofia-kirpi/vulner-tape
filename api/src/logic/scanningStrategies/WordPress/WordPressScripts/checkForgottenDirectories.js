const { dirb, analyze200 } = require("../../../../helpers/dirb");

exports.check = async (url) => {
  const data = await dirb(url, "WordPress.txt");
  return await analyze200(data);
};
