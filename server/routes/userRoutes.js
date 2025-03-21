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
      const userExists = await User.findOne({email: req.body.email});
  
      if (!userExists) {
        res.send({
          success: false,
          message: "User does not exist",
        });
      } else{
          const isPasswordMatched = await bcrypt.compare(userExists.password, req.body.password)

          if(isPasswordMatched) {
            const token = jwt.sign({userId: user._id }, process.env.SECRET_KEY )
            res.send({
                success: true,
                message: "User Logged In Successfully",
                token: token
            });

          } else {
            res.send({
                success: fasle,
                message: "Password did not match",
            });
          }
  
          
      }
     
    } catch (err) {

    }
  });

module.exports = router;
