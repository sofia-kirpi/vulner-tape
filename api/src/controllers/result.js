const Joi = require("joi");
const { Op } = require("sequelize");
const { StatusCodes } = require("http-status-codes");

const Result = require("../models/Result");

exports.getList = async (req, res) => {
  let { sort, range, filter } = req.query;
  const parameters = {};

  if (sort) {
    sort = JSON.parse(sort);
    parameters.order = [sort];
  }

  if (range) {
    range = JSON.parse(range);
    const [from, to] = range;
    parameters.where = {
      [Op.and]: [
        {
          id: {
            [Op.gte]: from,
            [Op.lte]: to,
          },
        },
      ],
    };
  }

  if (filter && String(filter) !== "{}") {
    filter = JSON.parse(filter);
    let field = Object.keys(filter)[0];
    const value = filter[field];
    if (parameters.where) {
      parameters.where[Op.and].push({ [field]: value });
    } else {
      parameters.where = { [field]: value };
    }
  }

  const results = await Result.findAll(parameters);
  const total = await Result.count();
  res.status(StatusCodes.OK).send({ data: results, total });
};
