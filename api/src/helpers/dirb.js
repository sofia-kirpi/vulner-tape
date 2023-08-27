const fs = require("fs/promises");
const path = require("path");
const fetch = require("node-fetch");
const { StatusCodes } = require("http-status-codes");

exports.dirb = async (url, file) => {
  const result = [];
  try {
    const wordlist = path.resolve(__dirname, `../wordlists/${file}`);
    const data = await fs.readFile(wordlist, "utf8");
    const paths = data.split("\n");
    for (let path of paths) {
      try {
        const { status } = await fetch(`${url}/${path}`, {
          redirect: "manual",
        });
        result.push({ path, status });
      } catch (error) {
        console.log(error);
        continue;
      }
    }
    return result;
  } catch (error) {
    console.log(error);
    return result;
  }
};

exports.analyze200 = async (results) => {
  results = results.filter((result) => result.status === StatusCodes.OK);
  results.map((result) => {
    if (result.status === StatusCodes.OK) result.result = "failed";
    return result;
  });
  return results;
};

exports.analyzeAll = async (results) => {
  results = results.filter((result) => result.status !== StatusCodes.NOT_FOUND);
  results.map((result) => {
    if (result.status === StatusCodes.OK) result.result = "failed";
    else result.result = "passed";
    return result;
  });
  return results;
};
