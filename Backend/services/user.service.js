const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || password) {
    throw new Error("All fields are required!");
  }
  //agar aisa nhi hua to user me pass kr deneg sabi ko
  const user = userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password, // ye direct password nahi rahega jaha call krenege uske pahle hum ise hash form me convert kr lenege then use hi  db me store kara denge
  });

  return user;
};
