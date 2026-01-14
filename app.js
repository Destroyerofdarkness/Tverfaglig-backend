const express = require("express");

const app = express();

const cors = require("cors")

const { connectToMongoDb } = require("./handlers/mongoDbHandler.js");

require("dotenv").config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

connectToMongoDb(process.env.mongodb);

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

const main_router = require("./routes/default_router.js");

const auth_router = require("./routes/auth_routes.js");

const authorized_router = require("./routes/authorized_routes.js")

app.use(auth_router);

app.use(main_router);

app.use("/home", authorized_router)

app.listen(4000, async () => {
  console.log("Server running on port 4000");
});
