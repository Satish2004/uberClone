const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controllers/captain-controller");

const router = express.Router();

//  captain routes here

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 character long!"),
    // last name optional hia
    body("password")
      .isLength({ min: 7 })
      .withMessage("Password must be at least 7 character long!"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("color must be at least 3 character long!"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("plate must be at least 3 character long!"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("capacity must be at least 1!"),
    body("vehicle.vehicalType")
      .isIn(["bike", "car", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  captainController.registerCaptain
);
module.exports = router;
