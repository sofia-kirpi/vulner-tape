const fetch = require("node-fetch");
const GENERATOR_REGEXP = /<meta name="generator" content="WordPress/g;

const checkByGenerator = async (url) => {
  const response = await fetch(url);
  const page = await response.text();
  return Boolean(await page.match(GENERATOR_REGEXP));
};

const algorithms = [
    checkByGenerator,
];

exports.check = async (url) => {
  for (let algorithm of algorithms) if (await algorithm(url)) return true;
  return false;
};
