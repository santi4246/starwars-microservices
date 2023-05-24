const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { _id, title, director } = req.body;
    if (_id && title && director) {
        next();
    }
    else {
        throw new ClientError(401, `Properties id, title or director are missing`);
    }
}