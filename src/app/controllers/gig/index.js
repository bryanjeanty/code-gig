// Import DB
const db = require("../../../../data/database/db.js");
// Import Gig model
const Gig = require("../../models/gig.js");

const LIST = (req, res, next) =>
  Gig.findAll()
    .then(gigs => {
      console.log(gigs);
      return res.sendStatus(200);
    })
    .catch(error => console.error("error", error));

module.exports = { LIST };
