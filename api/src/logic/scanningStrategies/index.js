const Description = require("../../models/Description");
const WordPress = require("./WordPress");
const Default = require("./Default");

const scanners = {
  WordPress: { uniqueKey: "platform-1", handler: WordPress },
  Default: { uniqueKey: "platform-2", handler: Default },
};

const decorator = async (data, uniqueKey) => {
  const { name, description } = await Description.findOne({
    where: { uniqueKey },
    rejectOnEmpty: true,
  });
  return { name, description, data };
};

exports.scan = async (platforms, url) => {
  const results = [];
  for (let platform of platforms)
    if (scanners[platform]) {
      try {
        results.push(
          await decorator(
            await scanners[platform].handler.scan(url),
            scanners[platform].uniqueKey
          )
        );
      } catch (error) {
        console.log(error);
        continue;
      }
    }
  return results;
};
