const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const filmsRouter = Router();

filmsRouter.get("/", controllers.getFilms);
filmsRouter.post("/", middlewares.validation, controllers.createFilms);
filmsRouter.get("/:id", controllers.getFilm);
filmsRouter.delete("/:id", controllers.deleteFilm);

module.exports = filmsRouter;