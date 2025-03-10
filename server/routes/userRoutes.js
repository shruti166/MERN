const express = require("express");
const bcrypt = require('bcryptjs')
const router = express.Router();
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

module.exports = router;
