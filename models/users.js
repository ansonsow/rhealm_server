const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },

    password: {
        type: String
    },
    profilePhoto: {
        type: String
    },
    hairColor: {
        type: String
    },
    colorDeficiency: {
        type: String
    },
    colorId: {
        type: String
    }
})

const user = mongoose.model("users", usersSchema);

module.exports = user;