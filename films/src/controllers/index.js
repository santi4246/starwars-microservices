const { catched } = require("../utils");

module.exports = {
    getFilms: catched(require("./getFilms")),
    createFilms: catched(require("./createFilms")),
    getFilm: catched(require("./getFilm")),
    deleteFilm: catched(require("./deleteFilm"))
}