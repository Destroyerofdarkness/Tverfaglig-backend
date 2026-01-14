const router = require("express").Router();
const controller = require("../controller/authorized_controllers")
const {authorize,}= require("../middleware/jwtAuth")

router.post("/:user", controller.user_page_priv_post)

router.get("/findUserData/:user",controller.user_data)


module.exports = router