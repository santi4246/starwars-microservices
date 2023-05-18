const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newPlanet = await axios.post("http://database:3005/api/Planet", req.body);
    response(res, 201, newPlanet.data);
};