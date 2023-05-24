const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const characterRouter = Router();

characterRouter.get("/", controllers.getCharacters);
characterRouter.post("/", middlewares.validation, controllers.createCharacter);
characterRouter.get("/:id", controllers.getCharacter);
characterRouter.delete("/:id", controllers.deleteCharacter);

module.exports = characterRouter;