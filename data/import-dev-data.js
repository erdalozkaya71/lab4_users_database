const fs = require("fs");
const mongoose = require("mongoose");
//const dotenv = require("dotenv");
const User = require("../models/userModel");

const DB_HOST = "cluster0.phnktq8.mongodb.net";
const DB_USER = "erdalozkaya";
const DB_PASSWORD = "Okan2010";
const DB_NAME = "user";
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(DB_CONNECTION_STRING, {})
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.error(`DB connection error: ${err.message}`));

//READ JSON FILE
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/userData.json`, "utf-8")
);

//IMPORT DATA INTO DB
const importData = async () => {
  try {
    await User.create(users);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
