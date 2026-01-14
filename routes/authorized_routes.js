const router = require("express").Router();
const controller = require("../controller/authorized_controllers")
const {authorize,}= require("../middleware/jwtAuth")

router.post("/:user",authorize, controller.user_page_priv_post)


module.exports = router