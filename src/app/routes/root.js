const { Router } = require("express");
const { ROOT } = require("../controllers/root/index.js");

// Create Router instance
const router = new Router();

// Declare routes
router.get("/", ROOT);

// Export file
module.exports = router;
