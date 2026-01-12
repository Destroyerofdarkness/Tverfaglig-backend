const express = require("express");

const app = express();

const {connectToMongoDb}= require("./handlers/mongoDbHandler.js")

require("dotenv").config();

app.set("view engine", "ejs");

app.use(express.json());

app.set(express.urlencoded({extended:true}));

connectToMongoDb(process.env.mongodb)

const main_router = require("./routes/default_router.js")

app.use(main_router)

app.listen(3000, async()=>{
    console.log("Server running on port 3000");
});
