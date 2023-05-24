const axios = require("axios");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
    const { id } = req.params;    
    const character = await axios.get(`http://database:3005/api/Character/${id}`);
    if (!character.data.data) {
        throw new ClientError(404, `The character was not found in the Database`);
    }
    response(res, 200, character.data);    
};