const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newFilm = await axios.post("http://database:3005/api/Film", req.body);
    response(res, 201, newFilm.data);
};