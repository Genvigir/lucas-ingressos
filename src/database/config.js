const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database/database.sqlite", // Arquivo do banco
});

module.exports = sequelize;
