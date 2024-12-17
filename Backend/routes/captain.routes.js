const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controllers/captain-controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

//  captain routes here

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength()
      .withMessage("First name must be at least 3 character long!"),
    // last name optional hia
    body("password")
      .isLength()
      .withMessage("Password must be at least 7 character long!"),
    body("vehicle.color")
      .isLength()
      .withMessage("color must be at least 3 character long!"),
    body("vehicle.plate")
      .isLength()
      .withMessage("plate must be at least 3 character long!"),
    body("vehicle.capacity")
      .isLength()
      .withMessage("capacity must be at least 1!"),
    body("vehicle.vehicalType")
      .isIn(["bike", "car", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  captainController.registerCaptain
);

// login route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength()
      .withMessage("Password must be at least 7 character long!"),
  ],
  captainController.loginCaptain
);

// get profile route
router.get(
  "/profile",
  authMiddleware.authCaptain,
  captainController.getCaptainProfile
);

// logout route
router.post(
  "/logout",
  authMiddleware.authCaptain,
  captainController.logoutCaptain
);

module.exports = router;
