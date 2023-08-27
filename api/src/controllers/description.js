const Joi = require("joi");
const { Op } = require("sequelize");
const { StatusCodes } = require("http-status-codes");

const Description = require("../models/Description");
const Type = require("../models/Type");

exports.getList = async (req, res) => {
  const platforms = await Description.findAll({
    where: {
      "$type.name$": "Platform",
    },
    include: {
      model: Type,
    },
  });

  const descriptions = [];
  for (const { name } of platforms) {
    const item = {};
    item.platform = await Description.findOne({
      where: {
        name,
      },
      include: [
        {
          model: Type,
        },
      ],
    });
    item.vulnerabilities = await Description.findAll({
      where: {
        "$type.name$": name,
      },
      include: [
        {
          model: Type,
        },
      ],
    });
    descriptions.push(item);
  }

  res.status(StatusCodes.OK).send({ data: descriptions });
};
