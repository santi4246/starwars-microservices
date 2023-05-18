const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newCharacter = await axios.post("http://database:3005/api/Character", req.body);    
    response(res, 201, newCharacter.data);
};