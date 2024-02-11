const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");

//TODO - Replace you Connection String here
const DB_HOST = "cluster0.phnktq8.mongodb.net";
const DB_USER = "erdalozkaya";
const DB_PASSWORD = "Okan2010";
const DB_NAME = "user";
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(DB_CONNECTION_STRING, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then((success) => {
    console.log("Success Mongodb connection");
  })
  .catch((err) => {
    console.log("Error Mongodb connection");
  });

app.listen(3000, () => {
  console.log("Server is running...");
});
