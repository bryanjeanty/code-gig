// Dependencies
const Sequelize = require("sequelize");
// File import
const dbConfig = require("../../private/dbconfig.js");

// Create db instance
const db = new Sequelize("codegig", "cg_user", process.env.CG_PW, dbConfig);

module.exports = db;
