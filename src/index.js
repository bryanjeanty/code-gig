// Dependencies
const express = require("express");
const expHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const path = require("path");
// Imported Files
const rootRouter = require("./app/routes/root.js");

// Create express instance
const app = express();

const db = new Sequelize("codegig", "cg_user", process.env.CG_PW, {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(error => console.error("error", error));

// Routes
app.use("/", rootRouter);

// Exports
module.exports = app;
