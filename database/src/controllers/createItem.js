const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {    
    const { model } = req.params;    
    const data = await store[model].insert(req.body);
    response(res, 201, data);
}