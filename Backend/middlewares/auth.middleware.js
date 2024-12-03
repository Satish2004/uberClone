const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// we will create a middleware is user authenticate or not??
module.exports.authUser = async (req, res, next) => {
  //tocken jarurat hai jo jada taar do jagah milti hai header ke andar ya cookies ke andar
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  //ab hume token verify karna hai mainly decrypt karna hai
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    res.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
