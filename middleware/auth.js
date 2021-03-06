require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



module.exports.encrypt = async (password) => {
  const salt = await bcrypt.genSalt(5);
  const hash = bcrypt.hash(password, salt);
  return hash;
};


module.exports.authToken = function (req, res, next) {
    //authenticates the x-auth-token, returns respective id
  const token = req.header("token");
  console.log("token: ",token)
  if (!token) throw {status:400, message:"Token Not Found!"};
  try{
      const decoded = jwt.verify(token, process.env.jwtKey);
      req._id=decoded._id;
      next();
  }
  catch(err){
      throw {status:400, message:"Token Invalid!"};
  }
};
