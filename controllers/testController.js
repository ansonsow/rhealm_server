let Test = require("../models/tests");
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');


const getTests = (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");

    Test.find({}).exec()
    .then(results=>{
        res.status(200).json(results);
    })
    .catch(error=>{
      console.log(error);
        res.status(500).json(error);
    });
}

const saveTest = (req,res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    // let newTest = new Test(req.body);
    const newTest = new Test({
      name: 'First Test'
    });

    newTest.save().then(
        result=>{
          console.log(result);
          res.status(201)
             .json("Test Success");
        }
      ).catch(
        error=>{
          // console.log(error);
          res.status(500)
             .json(error)
        }
      )

}

module.exports = { getTests,saveTest };
