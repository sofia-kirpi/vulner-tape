const WordPress = require("./WordPress");

const identifiers = [
  { handler: WordPress, name: "WordPress" },
];

exports.check = async (url) => {
  const platforms = ["Default"];
  for (let identifier of identifiers)
    if (await identifier.handler.check(url)) platforms.push(identifier.name);
  return platforms;
};
