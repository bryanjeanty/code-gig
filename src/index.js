// Dependencies
const express = require("express");
const expHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
// Imported routes
const rootRouter = require("./app/routes/root.js");
const gigRouter = require("./app/routes/gig.js");

// Import database
const db = require("../data/database/db.js");

// Create express instance
const app = express();

// Handlebars
app.engine("handlebars", expHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set static folder
app.use(express.static(path.join(__dirname, "../public")));

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(error => console.error("error", error));

// Use Routers
app.use("/", rootRouter);
app.use("/gigs", gigRouter);

// Exports
module.exports = app;
