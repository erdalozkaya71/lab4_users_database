const express = require("express");
const userController = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(userController.createOne);

module.exports = router;
