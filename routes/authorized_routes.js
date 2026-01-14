const router = require("express").Router();
const controller = require("../controller/authorized_controllers");

router.post("/:user", controller.user_publish);

router.get("/findUserData/:user", controller.user_data);

module.exports = router;
