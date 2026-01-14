const router = require("express").Router();
const controller = require("../controller/auth_controller.js");
const {authorize,}= require("../middleware/jwtAuth")

router.post("/sign-up", controller.sign_up_user)

router.post("/checkuser/:jwt",controller.checkUser)

router.post("/sign-in",controller.sign_in_user)

router.post("/delete/:user",authorize,controller.user_delete)

module.exports = router