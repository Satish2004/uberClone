const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistToken = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const userModel = require("../models/user.model");

// we will create a middleware is user authenticate or not??
module.exports.authUser = async (req, res, next) => {
  //tocken jarurat hai jo jada taar do jagah milti hai header ke andar ya cookies ke andar
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  //ab hume token verify karna hai mainly decrypt karna hai

  const isBlacklisted = await blacklistToken.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    res.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
// we will create a middleware is captain authenticate or not??
module.exports.authCaptain = async (req, res, next) => {
  //tocken jarurat hai jo jada taar do jagah milti hai header ke andar ya cookies ke andar
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  //ab hume token verify karna hai mainly decrypt karna hai

  const isBlacklisted = await blacklistToken.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded.id);
    res.captain = captain;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
