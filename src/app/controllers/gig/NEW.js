// Import DB
const db = require("../../../../data/database/db.js");
// Import Gig model
const Gig = require("../../models/gig.js");

// Display add gig form
const NEW = (req, res, next) => res.render("add");

module.exports = NEW;
