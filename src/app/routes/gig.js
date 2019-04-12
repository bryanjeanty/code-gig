const { Router } = require("express");
const { LIST, CREATE } = require("../controllers/gig/index.js");

// Create Router instance
const router = new Router();

// Declare routes
router.get("/", LIST);
router.get("/add", CREATE);

// Export file
module.exports = router;
