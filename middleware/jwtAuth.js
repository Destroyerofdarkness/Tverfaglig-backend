const jwt = require("jsonwebtoken");

const authorize = (req,res,next)=>{
  const user = req.params.user
  const loggedIn = res.locals.user.username
  if(user === loggedIn){
    next()
  }else{
    res.redirect(`/${user}`)
  }
}
module.exports = { authorize };
