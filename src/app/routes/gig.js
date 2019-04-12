const { Router } = require("express");
const { LIST } = require("../controllers/gig/index.js");

// Create Router instance
const router = new Router();

// Declare routes
router.get("/", LIST);

// Export file
module.exports = router;
