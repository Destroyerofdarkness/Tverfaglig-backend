const router = require("express").Router();
const controller = require("../controller/default_controller.js")

router.get("/randomQuote",controller.home_quote_get)


module.exports = router;