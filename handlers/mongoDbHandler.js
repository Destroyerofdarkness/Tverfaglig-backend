const mongoose = require("mongoose");
async function connectToMongoDb(mongoDb) {
    try{
        await mongoose.connect(mongoDb)
        console.log("Connected to mongoDb")
    }catch(err){
        console.log("Error on mongodbHandler ./controller/mongoDbHandler Error message:", err)
    }
}

module.exports = {connectToMongoDb}