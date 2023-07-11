const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clothingSchema = new Schema({
    userId: {
        type: String,
        require: true,
    },

    name: {
        type: String
    },

    closetId: {
        type: [String],
    },

    photo: {
        type: [String]
    },

    colour: {
        type: Array
    },

    clothingCategory: {
        type: String
    },

    type: {
        type: String
    },

    texture: {
        type: String
    }
})

const clothing = mongoose.model("clothing", clothingSchema);

module.exports = clothing;