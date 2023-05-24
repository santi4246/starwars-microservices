const axios = require("axios");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
    const { id } = req.params;
    const message = await axios.delete(`http://database:3005/api/Planet/${id}`);
    if (message.data.data.deletedCount === 0) {
        throw new ClientError(404, `The Planet was not found in the Database`);
    }
    response(res, 200, message.data);
}