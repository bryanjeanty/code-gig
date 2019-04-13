// Import DB
const db = require("../../../../data/database/db.js");
// Import Gig model
const Gig = require("../../models/gig.js");

// Post a gig
const CREATE = (req, res, next) => {
  const data = {
    title: "Simple Wordpress Website",
    technologies: "Wordpress, PHP, HTML, CSS",
    budget: "$1000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    contact_email: "user2@gmail.com"
  };

  let { title, technologies, budget, description, contact_email } = data;

  // Insert into table
  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email
  })
    .then(gig => res.redirect("/gigs"))
    .catch(error => console.error("error", error));
};

module.exports = CREATE;
