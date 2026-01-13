const User = require("../models/User.js")


const render_login = (req, res) => {
  try {
    res.render("login", { title: "Sign In" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const render_register = (req, res) => {
  try {
    res.render("register", { title: "Sign Up" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const sign_in_user = async(req,res)=>{
  try{
    const userId = await User.login(req.body)
    res.status(200).redirect("/")
  }catch(err){
    console.log(err);
    res.status(300).send({err})
  }
}

const sign_up_user = async(req,res)=>{
    const {passwd,conPass} = req.body
    try{
        const userId = await User.register(req.body)
        res.status(200).redirect("/")
    }catch(err){
        console.log(err)
        res.status(300).send({err})
    }
}


module.exports = {render_login, render_register, sign_up_user, sign_in_user}
