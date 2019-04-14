const { Router } = require("express");
const { LIST, NEW, CREATE, SEARCH } = require("../controllers/gig/index.js");

// Create Router instance
const router = new Router();

// Declare routes
router.get("/", LIST);
router.get("/add", NEW);
router.post("/add", CREATE);
router.get("/search", SEARCH);

// Export file
module.exports = router;
