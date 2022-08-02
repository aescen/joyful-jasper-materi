require("dotenv").config();
const { Sequelize } = require("sequelize");

const host = process.env.HOST || "localhost";

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME || "sekolah",
  username: process.env.DATABASE_USERNAME || "admin123",
  password: process.env.DATABASE_PASSWORD || "admin123",
  dialect: "mysql",
  host,
});

module.exports = sequelize;
