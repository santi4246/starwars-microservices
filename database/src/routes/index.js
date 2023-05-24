const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const { validate } = require("../middlewares");

router.get("/:model", validate, controllers.list);

router.post("/:model", validate, controllers.createItem);

router.get("/:model/:id", validate, controllers.findById);

router.delete("/:model/:id", validate, controllers.deleteById);

module.exports = router;