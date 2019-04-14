// Import DB
const db = require("../../../../data/database/db.js");
// Import Gig model
const Gig = require("../../models/gig.js");

// Post a gig
const CREATE = (req, res, next) => {
  let { title, technologies, budget, description, contact_email } = req.body;
  let errors = [];

  // Validate Fields
  if (!title) {
    errors.push({ text: "Please add a title" });
  }
  if (!technologies) {
    errors.push({ text: "Please add some technologies" });
  }
  if (!description) {
    errors.push({ text: "Please add a description" });
  }
  if (!contact_email) {
    errors.push({ text: "Please add a contact email" });
  }

  // Check for errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
      title,
      technologies,
      budget,
      description,
      contact_email
    });
  } else {
    if (!budget) {
      budget = "Unknown";
    } else {
      budget = `$${budget}`;
    }

    // Make lowercase and remove space after comma
    technologies = technologies.toLowerCase().replace(/, /g, ",");

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
  }
};

module.exports = CREATE;
