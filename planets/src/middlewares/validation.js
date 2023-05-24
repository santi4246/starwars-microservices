const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { _id, name } = req.body;
    if (_id && name) {
        next();
    }
    else {
        throw new ClientError(401, `Properties id or name are missing`);
    }
}