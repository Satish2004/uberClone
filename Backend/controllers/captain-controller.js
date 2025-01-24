// const captainModel = require("../models/captain.model");
// const captainService = require("../services/user.service");
// const validationResult = require("express-validator");
// const blacklistToken = require("../models/blacklistToken.model");
// const authMiddleware = require("../middlewares/auth.middleware");
// //then we create route logic of captain

// // register controller
// module.exports.registerCaptain = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     // kuch error aya hai --> error empty nahi hai
//     return res.status(400).json({ errors: errors.array() });
//   }
//   const { fullname, email, password, vehical } = req.body;
//   //is any register in the same email ?
//   const isCaptainAlreadyExist = await captainModel.findOne({ email });

//   if (isCaptainAlreadyExist) {
//     return res.status(400).json({ error: "Captain already exists!" });
//   }

//   // pasword ko hash karne ke liye kiye taaki password db me save karne se pahle hash ho jaye
//   const hashPassword = await captainModel.hashPassword(password); // dont save directly on db password use hashing then save in db
//   const captain = await captainService.createCaptain({
//     firstname: fullname.firstname,
//     lastname: fullname.lastname,
//     email,
//     password: hashPassword,
//     color: vehical.color,
//     plate: vehical.plate,
//     capacity: vehical.capacity,
//     vehicalType: vehical.vehicalType,
//   });
//   const token = captain.generateAuthTocken();
//   res.status(201).json({ token, captain });
// };

// //login controller
// module.exports.loginCaptain = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   const { email, password } = req.body;
//   const captain = await captainModel.findOne({ email }).select("+password");
//   if (!captain) {
//     return res.status(400).json({ error: "Captain not found!" });
//   }
//   const isMatch = await captainModel.comparePassword(
//     password,
//     captain.password
//   );
//   if (!isMatch) {
//     return res.status(401).json({ error: "Invalid email or password!" });
//   }
//   const token = captain.generateAuthTocken();
//   res.cookie("token", token);
//   res.status(200).json({ token, captain });
// };
// // get profile controller
// module.exports.getCaptainProfile = async (req, res, next) => {
//   //to isme ek functionallity dena hi ki hume middleware ke sath jo bhi user login hai nahi pahle check kro then check kro hai to profile dikha do nahi to error fake do usi ko banane ke liye ek naya folder banate hai middleware folder
//   res.status(200).json(req.user);
// };

// // logout controller
// module.exports.logoutCaptain = async (req, res, next) => {
//   const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
//   await blacklistToken.create({ token });
//   res.clearCookie("token");
//   res.status(200).json({ message: "Captain Logout Successfully" });
// };

const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const blacklistToken = require("../models/blacklistToken.model");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({ email });

  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "Captain already exist" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();

  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = captain.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blackListTokenModel.create({ token });

  res.clearCookie("token");

  res.status(200).json({ message: "Logout successfully" });
};
