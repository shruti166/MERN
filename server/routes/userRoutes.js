const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

// Route for register

router.post('/register', async(req, res) => {
    const newUser = await User(req.body);

    await newUser.save();

    res.send({
        success: true,
        message: 'User Registered Successfully'
    })
})

module.exports = router