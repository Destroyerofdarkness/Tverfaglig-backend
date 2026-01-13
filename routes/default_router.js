const router = require("express").Router();
const {authenticate} = require("../middleware/jwtAuth.js") 
const controller = require("../controller/default_controller.js")

router.get("/",controller.render_home);

router.get("/:user", controller.user_page_public_render)



module.exports = router;