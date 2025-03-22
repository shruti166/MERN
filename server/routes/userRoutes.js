const express = require("express");
const bcrypt = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken')

const User = require("../models/userModel");

// Route for register

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({email: req.body.email});

    if (userExists) {
      res.send({
        success: true,
        message: "User already exists",
      });
    } else{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hashedPassword;

        const newUser = await User(req.body);
        await newUser.save();
    
        res.send({
          success: true,
          message: "User Registered Successfully",
        });
    }
   
  } catch (err) {}
});

router.post("/login", async (req, res) => {
  try {
      const userExists = await User.findOne({ email: req.body.email });

      if (!userExists) {
          return res.status(400).json({
              success: false,
              message: "User does not exist",
          });
      }

      const isPasswordMatched = await bcrypt.compare(req.body.password, userExists.password);

      if (isPasswordMatched) {
          const token = jwt.sign(
              { userId: userExists._id },
              process.env.SECRET_KEY,
              { expiresIn: "1h" } // Token expires in 1 hour
          );

          return res.json({
              success: true,
              message: "User Logged In Successfully",
              token: token
          });
      } else {
          return res.status(400).json({
              success: false,  // Fixed spelling mistake
              message: "Password did not match",
          });
      }
  } catch (err) {
      return res.status(500).json({
          success: false,
          message: "Server Error",
          error: err.message
      });
  }
});

module.exports = router;
