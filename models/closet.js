const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const closetSchema = new Schema({
    userId:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String
    },
    occasion:{
        type:[String]
    }

})

const closet = mongoose.model("closets", closetSchema);

module.exports = closet;