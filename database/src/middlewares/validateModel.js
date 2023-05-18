const { ModelError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { model } = req.params;
    if (["Character", "Film", "Planet"].includes(model)) {
        return next();
    }
    else {
        throw new ModelError(401, `Error in params or model invalid`)
    }
}