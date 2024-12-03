const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// here is the blue print of the captain like schema of the captain
const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 character long!"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be at least 3 character long!"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"], // active means ready to ride and inactive means not ready to ride
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be at least 3 character long!"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate must be at least 3 character long!"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1!"], // capacity of the vehicle which means how many passengers can be seated in the vehicle include the captain
    },
    vehicalType: {
      type: String,
      enum: ["bike", "car", "auto"],
      required: true,
    },
  },

  location: {
    // we are using the langitude and latitude for the exact location to mark the user on the map
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

// here is the main logic of authentication and authorization and there are perform logic in captainSchema.methods  same as user

captainSchema.methods.generateAuthTocken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const Captain = mongoose.model("Captain", captainSchema);

module.exports = Captain;
