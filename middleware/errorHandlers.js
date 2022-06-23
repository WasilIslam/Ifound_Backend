function errorEmitter(err, req, res, next) {
  console.log("Error: ",err)
  if(!err.status){
    //plain text error
    return res.status(500).send(err)
  }
  res.status(err.status).send(err.message);
};
module.exports = { errorEmitter }