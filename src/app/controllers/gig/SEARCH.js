// Import DB
const db = require("../../../../data/database/db.js");
// Import Gig model
const Gig = require("../../models/gig.js");
// Import Sequelize
const Sequelize = require("sequelize");
// Create Op constant to use SQL 'like' functionality
const Op = Sequelize.Op;

const SEARCH = (req, res, next) => {
  let { term } = req.query;

  // Make term lowercase
  term = term.toLowerCase();

  Gig.findAll({ where: { technologies: { [Op.like]: `%${term}%` } } })
    .then(gigs => res.render("gigs", { gigs }))
    .catch(error => console.error("error", error));
};

module.exports = SEARCH;
