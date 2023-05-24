const { Schema } = require("mongoose");

const characterSchema = new Schema({
    _id: String,
    name: { type: String, validate: [validateName, `The field cannot contains strange characters`]},
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: { type: String, ref: "Planet" }, // Referencia al modelo Planet
    films: [{ type: String, ref: "Film" }] // Referencia al modelo Film
});

characterSchema.statics.list = async function () {
    return await this.find().populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]);
}

characterSchema.statics.get = async function (id) {
    return await this.findOne({ _id: id }).populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]);
}

characterSchema.statics.insert = async function (character) {
    return await this.create(character);
}

characterSchema.statics.delete = async function (id) {
    return await this.deleteOne({ _id: id });
}

function validateName (str) {
    return (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(str))
}

module.exports = characterSchema;