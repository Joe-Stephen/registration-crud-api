const express = require("express");
const sequelize = require("./config/db.js");
const cors = require("cors");
const dotenv = require("dotenv").config();
const db = require("./models");
db.sequelize.sync();
const multer = require("multer");
const path = require("path");

//sequelize setup
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
const app = express();

var corOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corOptions));

// middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/public'));
// app.use("/uploads", express.static('uploads'));

// routers
app.use("/", require("./routes/userRouter"));

// Setting folder for ejs files
app.set("view engine", "ejs");

//port

const PORT = process.env.PORT || 8080;

//test
app.get("/", (req, res) => {
  res.json("Welcome to the server.");
});

//server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
