// Import DB
const db = require("../../../../data/database/db.js");
// Import Gig model
const Gig = require("../../models/gig.js");

// Get gig list
const LIST = (req, res, next) =>
  Gig.findAll()
    .then(gigs => res.render("gigs", { gigs }))
    .catch(error => console.error("error", error));

module.exports = LIST;
