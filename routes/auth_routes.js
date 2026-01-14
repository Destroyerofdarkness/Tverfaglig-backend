const router = require("express").Router();
const controller = require("../controller/auth_controller.js");
const {authorize}= require("../middleware/jwtAuth")

router.post("/sign-up", controller.sign_up_user)

router.post("/checkuser/:jwt",controller.findUser)

router.post("/sign-in",controller.sign_in_user)

router.delete("/delete/:user",controller.user_delete)

module.exports = router