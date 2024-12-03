const captainModel = require("../models/captain.model");
const captainService = require("../services/user.service");
const validationResult = require("express-validator");

//then we create route logic of captain

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // kuch error aya hai --> error empty nahi hai
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password, vehical } = req.body;
  //is any register in the same email ?
  const isCaptainAlreadyExist = await captainModel.findOne({ email });

  if (isCaptainAlreadyExist) {
    return res.status(400).json({ error: "Captain already exists!" });
  }

  // pasword ko hash karne ke liye kiye taaki password db me save karne se pahle hash ho jaye
  const hashPassword = await captainModel.hashPassword(password); // dont save directly on db password use hashing then save in db
  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: vehical.color,
    plate: vehical.plate,
    capacity: vehical.capacity,
    vehicalType: vehical.vehicalType,
  });
  const token = captain.generateAuthTocken();
  res.status(201).json({ token, captain });
};
