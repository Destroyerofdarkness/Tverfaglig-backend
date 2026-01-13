const router = require("express").Router();
const {authenticate} = require("../middleware/jwtAuth.js") 
const controller = require("../controller/default_controller.js")

router.get("/",authenticate,controller.render_home);



module.exports = router;