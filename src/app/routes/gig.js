const { Router } = require("express");
const { LIST, NEW, CREATE } = require("../controllers/gig/index.js");

// Create Router instance
const router = new Router();

// Declare routes
router.get("/", LIST);
router.get("/add", NEW);
router.post("/add", CREATE);

// Export file
module.exports = router;
