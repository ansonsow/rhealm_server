const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

const verifyManagerToken = (req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers["token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        // console.log(decoded.type)
        if(decoded.type == "Admin" || decoded.type == "Manager"){
            req.user = decoded;
        }else{
            return res.status(401).send("Don't have permission for this");
        }
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports = {verifyToken, verifyManagerToken};
