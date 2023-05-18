const { catched } = require("../utils");

module.exports = {
    getCharacters: catched(require("./getCharacters")),
    createCharacter: catched(require("./createCharacter")),
    getCharacter: catched(require("./getCharacter"))
}