const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const planets = await axios.get("http://database:3005/api/Planet");
    response(res, 200, planets.data);
}