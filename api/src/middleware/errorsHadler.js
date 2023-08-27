const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const errorsHandler = (error, _req, res, _next) => {
  console.log(error);
  const { name } = error;
  const errors = {
    default: {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      body: {
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        details: name,
      },
    },
    ValidationError: {
      status: StatusCodes.UNPROCESSABLE_ENTITY,
      body: {
        message: ReasonPhrases.UNPROCESSABLE_ENTITY,
        details: error.details,
      },
    },
    SequelizeEmptyResultError: {
      status: StatusCodes.NOT_FOUND,
      body: { message: ReasonPhrases.NOT_FOUND, details: name },
    },
    FetchError: {
      status: StatusCodes.NOT_FOUND,
      body: { message: ReasonPhrases.NOT_FOUND, details: name },
    },
  };

  const serverAnswer = errors[name] || errors.default;
  res.status(serverAnswer.status).send(serverAnswer.body);
};

module.exports = errorsHandler;
