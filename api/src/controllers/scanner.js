const Joi = require("joi");
const { StatusCodes } = require("http-status-codes");

const recognitionStrategies = require("../logic/recognitionStrategies");
const scanningStrategies = require("../logic/scanningStrategies");
const Result = require("../models/Result");

const scanSchema = Joi.object({
  body: Joi.object({
    url: Joi.string().uri(),
  }),
});

exports.scan = async (req, res) => {
  const { body } = await scanSchema.validateAsync({ body: req.body });
  const platforms = await recognitionStrategies.check(body.url);
  const results = await scanningStrategies.scan(platforms, body.url);
  await Result.create({ url: body.url, data: JSON.stringify(results) });
  res.status(StatusCodes.OK).send({ data: results });
};
