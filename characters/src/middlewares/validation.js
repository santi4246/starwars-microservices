const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { _id, name, gender } = req.body;
    if (_id && name && gender) {
        next();
    }
    else {
        throw new ClientError(401, `Properties id, name or gender are missing`);
    }
}