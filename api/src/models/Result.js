const { DataTypes } = require("sequelize");

const { pg } = require("../initializers");

const Result = pg.define("result", {
  url: DataTypes.STRING,
  data: DataTypes.JSON,
});

module.exports = Result;
