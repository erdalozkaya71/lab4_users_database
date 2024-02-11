const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
      "Please fill a valid email address",
    ],
  },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: {
      type: String,
      required: true,
      match: [
        /^[a-zA-Z\s]*$/,
        "City name can only contain alphabets and spaces",
      ],
    },
    zipcode: {
      type: String,
      required: true,
      match: [/^\d{5}-\d{4}$/, "Zip code must be in the format DDDDD-DDDD"],
    },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true },
    },
  },
  phone: {
    type: String,
    required: true,
    match: [
      /^1-\d{3}-\d{3}-\d{4}$/,
      "Phone number must be in the format 1-DDD-DDD-DDDD",
    ],
  },
  website: {
    type: String,
    required: true,
    match: [
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
      "Please enter a valid URL",
    ],
  },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true },
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
