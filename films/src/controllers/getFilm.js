const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const film = await axios.get(`http://database:3005/api/Film/${id}`);
    response(res, 200, film.data);
}