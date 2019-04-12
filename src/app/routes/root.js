const { Router } = require("express");
const { ROOT } = require("../controllers/root/index.js");

const router = new Router();

router.get("/", ROOT);

module.exports = router;
