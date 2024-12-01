const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user-controller");

// express-validor --> validate all models data before the routing
//create all routes logic in controllers
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
      .withMessage("First name must be at least 7 character long!"),
  ],
  userController.registerUser
);

// login route for user

router.post(
  "/login",
  [
    //this is checks
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 7 })
      .withMessage("First name must be at least 7 character long!"),
  ],

  userController.loginUser
);

module.exports = router;
