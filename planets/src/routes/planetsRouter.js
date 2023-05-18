const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const planetsRouter = Router();

planetsRouter.get("/", controllers.getPlanets);
planetsRouter.post("/", middlewares.validation, controllers.createPlanets);
planetsRouter.get("/:id", controllers.getPlanet);

module.exports = planetsRouter;