const { DataTypes } = require("sequelize");

const { pg } = require("../initializers");
const Type = require("./Type");

const Description = pg.define(
  "description",
  {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    uniqueKey: DataTypes.STRING,
    typeId: DataTypes.INTEGER
  }
);

Description.belongsTo(Type, {
  foreignKey: "typeId",
});

module.exports = Description;
