// Import DB
const db = require("../../../../data/database/db.js");
// Import Gig model
const Gig = require("../../models/gig.js");

// Post a gig
const CREATE = (req, res, next) => {
  const data = {
    title: "Looking for a React Developer",
    technologies: "react, JS, HTML, CSS",
    budget: "$3000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    contact_email: "user1@gmail.com"
  };

  let { title, technologies, budget, description, contact_email } = data;
};

module.exports = CREATE;
