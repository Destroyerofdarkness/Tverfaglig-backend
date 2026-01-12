const {Schema, model} = require("mongoose");


const quoteSchema = new Schema({
    quote:{
        type: String,
        required: true,
        maxLength: 100,
        unique: true
    },
    origin:{
        type:String,
        required:true,
    },
    createdBy:{
        type:String,
        required:true
    }
})


module.exports = model("Quotes", quoteSchema)