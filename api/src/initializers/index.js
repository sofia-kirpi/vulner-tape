const { Sequelize } = require("sequelize");

const config = require("../config");

exports.pg = new Sequelize(config.pg);
