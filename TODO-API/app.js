require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create our express app
const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.URI;

// Handle CORS + Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((err) => console.log(err));
