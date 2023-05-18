const mongoose = require("mongoose");
const { DB_URI } = require("../config/envs");

const connection = mongoose.createConnection(DB_URI);

// Model definition
/* const Character = connection.model("Character", require("./schemas/characterSchema"));
const Film = connection.model("Film", require("./schemas/filmsSchema"));
const Planet = connection.model("Planet", require("./schemas/planetsSchema"));

Character.find()
.populate("films", ["_id", "title"])
.populate("homeworld", ["_id", "name"])
.then(response => console.log(response[0])); */

module.exports = {
    Character: connection.model("Character", require("./schemas/characterSchema")),
    Film: connection.model("Film", require("./schemas/filmsSchema")),
    Planet: connection.model("Planet", require("./schemas/planetsSchema"))
}