const { catched } = require("../utils");

module.exports = {
    getPlanets: catched(require("./getPlanets")),
    createPlanets: catched(require("./createPlanets")),
    getPlanet: catched(require("./getPlanet")),
    deletePlanet: catched(require("./deletePlanet"))
}