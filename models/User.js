const { Schema, model}= require("mongoose")
const argon2 = require("argon2")
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    passwd: {
        type:String,
        minLength: 6,
        required:true
    }
})

userSchema.pre("save",async function () {
    try{
        this.passwd = await argon2.hash(this.passwd)
    }catch(err){
        console.log(err);
    }
})

module.exports = model("Users", userSchema)

