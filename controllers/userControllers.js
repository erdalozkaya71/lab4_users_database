const User = require("../models/userModel");

exports.createOne = async (req, res, next) => {
  try {
    const doc = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user: doc,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error creating user",
      error: error.message,
    });
  }
};
