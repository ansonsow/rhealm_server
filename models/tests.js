const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testsSchema = new Schema({
    name:{
        type:String
    }
})

const test = mongoose.model("tests", testsSchema);

module.exports= test;
