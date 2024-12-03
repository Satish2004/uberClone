const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

// authentication-->
// this is registerUser router controller

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;
  const hashPassword = await userModel.hashPassword(password); // dont save directly on db password use hashing then save in db
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });
  const token = user.generateAuthTocken();
  res.status(201).json({ token, user });
};

//this is our loginUser controller
module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" }); // email galat ho ya password dono ke time me same message aata hai
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  //agar sahi rhti hai
  const token = user.generateAuthTocken();
  res.cookie("token", token);  // ye like authentication ke liye hota hai cookies me token save karne ke liye jo pahle header me bhi bhejata hai aur cookie me bhi aur 
  // ye cookie wala hai

  res.status(200).json({ token, user });
};
//  this is our getUserProfile route controller
module.exports.getUserProfile = async (req, res, next) => {
  //to isme ek functionallity dena hi ki hume middleware ke sath jo bhi user login hai nahi pahle check kro then check kro hai to profile dikha do nahi to error fake do usi ko banane ke liye ek naya folder banate hai middleware folder
  res.status(200).json(req.user);
};
