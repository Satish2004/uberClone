const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
// USER'S ROUTES-->
const userRoutes = require("./routes/user.routes");
// CAPTIAN'S ROUTES-->
const captainRoutes = require("./routes/captain.routes");

//then call mongoDB server
connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // THIS IS FOR AUTHENTICATION PURPOSE authenticate bande ko cookies me token bhejne ke liye aur usko cookies me token milne ke liye
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's origin
    methods: ["GET", "POST"],
  })
);

app.get("/", (req, res) => {
  res.send("hello uber");
});

// ALL ROUTES
app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
