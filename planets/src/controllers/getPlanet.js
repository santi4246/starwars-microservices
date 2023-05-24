const axios = require("axios");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
    const { id } = req.params;
    const planet = await axios.get(`http://database:3005/api/Planet/${id}`);
    if (!planet.data.data) {
        throw new ClientError(404, `The planet was not found in the Database`);
    }
    response(res, 200, planet.data);
}