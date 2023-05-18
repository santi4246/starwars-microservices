const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newFilm = await axios("http://database:3005/api/Character", req.body);
    response(res, 201, newFilm.data);
};