const Sequelize = require("sequelize");
const config = require("./dbConfig.js");

const sequelize = new Sequelize(config.development);

module.exports = sequelize;
