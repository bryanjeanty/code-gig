// Dependencies
const express = require("express");
const expHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
// Imported Files
const rootRouter = require("./app/routes/root.js");
const db = require("../data/database/db.js");

// Create express instance
const app = express();

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(error => console.error("error", error));

// Routes
app.use("/", rootRouter);

// Exports
module.exports = app;
