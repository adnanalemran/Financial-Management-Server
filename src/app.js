const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");
require("dotenv").config();

const userHandler = require("../routeHandler/userHandler");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fhwdeyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
`;

-mongoose.connect(uri, { dbName: process.env.DB_NAME });

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

//start user function

app.use("/user", userHandler);

// --------------------------------------localApi-------------------------------------------

app.get("/", (req, res) => {
  res.send("Database server is  connected");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
