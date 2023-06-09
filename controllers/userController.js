let User = require("../models/users");
var bcrypt = require('bcryptjs');
// let bcrypt = require()

const wtf = (req,res)=>{
  res.status(201).json("wtf")
}


const saveUsers = async (req,res) =>{
    
    res.header("Access-Control-Allow-Origin", "*");
  
      let newUser = new User(req.body);
      
      const existing = await User.findOne({email:newUser.email});
      if(existing){
          res.status(409)
             .json({message: "Email has been taken"});
      }
  
      const hashPassword = await bcrypt.hash(newUser.password,10)
      newUser.password = hashPassword;
      
      newUser.save().then(
        result=>{
          console.log(result);
          res.status(201)
             .json("Successfullu registered");
        }
      ).catch(
        error=>{
          res.status(500)
             .json(error)
        }
      )
  };

  const loginUser = async (req,res)=>{
    const email = req.body.email;
    // const user_id = req.body.user_id
    const password = req.body.password;
    // console.log()
    const user = await User.findOne({email:email});
  
    if(user){
      const rightPsw = await bcrypt.compare(password, user.password);
  
      if(rightPsw){
  
  
        const token = jwt.sign(
          { user_id: user.user_id,
            _id:user._id, 
            email:user.email,
            type: user.type
          },
            process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        const localUser = user;
        localUser.token = token
  
        const data = {
          "message":"successfully login",
          "data":localUser,
          "token":token
        };
  
        user.lastLogin = new Date(Date.now());
        await user.save();
        res.status(201).json(data)
        
      }else{
        const data = {"message":"wrong password"};
        console.log('wrong password');
        res.status(401).json(data);
      }
    }else{
      const data = {"message":"user not found"};
      res.status(404).json(data)
    }
  
  
  
  }

module.exports = { saveUsers,loginUser,wtf };
