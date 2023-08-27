const Joi = require("joi");
const { Op } = require("sequelize");
const { StatusCodes } = require("http-status-codes");

const Type = require("../models/Type");

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
    const field = Object.keys(filter)[0];
    const value = filter[field];
    if (parameters.where) {
      parameters.where[Op.and].push({ [field]: value });
    } else {
      parameters.where = { [field]: value };
    }
  }

  const roles = await Type.findAll(parameters);
  const total = await Type.count();

  res.status(StatusCodes.OK).send({ data: roles, total });
};

const getSchema = Joi.object({
  params: Joi.object({ id: Joi.number().integer().required() }),
});

exports.getOne = async (req, res) => {
  const { params } = await getSchema.validateAsync({
    params: req.params,
  });
  const role = await Type.findByPk(params.id, {
    rejectOnEmpty: true,
  });
  res.status(StatusCodes.OK).send(role);
};

const updateSchema = Joi.object({
  body: Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
  }),
});

exports.update = async (req, res) => {
  const { body } = await updateSchema.validateAsync({
    body: req.body,
  });
  const [, [role]] = await Type.update(body, {
    where: { id: body.id },
    returning: true,
  });

  res.status(StatusCodes.OK).send(role);
};

const createSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().required(),
  }),
});

exports.create = async (req, res) => {
  const { body } = await createSchema.validateAsync({
    body: req.body,
  });
  const role = await Type.create(body);

  res.status(StatusCodes.OK).send(role);
};

const deleteSchema = Joi.object({
  params: Joi.object({ id: Joi.number().integer().required() }),
});

exports.delete = async (req, res) => {
  const { params } = await deleteSchema.validateAsync({
    params: req.params,
  });
  await Type.destroy({ where: { id: params.id } });

  res.status(StatusCodes.OK).send({});
};

exports.deleteMany = async (req, res) => {
  let { filter } = req.query;
  filter = JSON.parse(filter);
  await Type.destroy({
    where: {
      id: {
        [Op.or]: filter.id,
      },
    },
  });
  res.status(StatusCodes.OK).send({});
};
