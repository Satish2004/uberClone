const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth.middleware");

// express-validor --> validate all models data before the routing
//create all routes logic in controllers

//user-->

// (1)register POST
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

// (2)login route for user  POST

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

//(3) profile route GET;;

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

module.exports = router;
