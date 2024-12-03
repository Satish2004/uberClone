const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  // this is the schema of the user means blueprint of the user
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be atleast 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [7, "Last name must be atleast 7 characters long"],
    },
    email: {
      type: String,
      require: true,
      minlength: [7, "email  must be atleast 7 characters long"],
    },
    password: {
      type: String,
      require: true,
      select: false, // ye by default user ko jab find krenge to aur kisi ko visible ni hogi
      // minlength: [7, "email  must be atleast 7 characters long"], there is no need because we use JWT for password for authentication
    },
    socketId: {
      type: String, // we use for socket.io for live tracking of the driver
    },
  },
});


// here is the main logic of authentication and authorization  and there are perform logic in userSchema.methods

userSchema.methods.generateAuthTocken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

// and now jaise hi tocken generate hua bcrypt se compare kro
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password); // jo user diya hai pass aur jo phle se save hai db me usse compare hoga
};

// thoda hash kiye
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
