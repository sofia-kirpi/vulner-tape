const { DataTypes } = require("sequelize");

const { pg } = require("../initializers");

const Type = pg.define("type", {
  name: DataTypes.STRING,
});

module.exports = Type;
