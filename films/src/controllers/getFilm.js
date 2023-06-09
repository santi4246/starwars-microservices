const axios = require("axios");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
    const { id } = req.params;
    const film = await axios.get(`http://database:3005/api/Film/${id}`);
    if (!film.data.data) {
        throw new ClientError(404, `The film was not found in the Database`);
    }
    response(res, 200, film.data);
}