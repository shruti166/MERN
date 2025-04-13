const express = require('expresss');
const router = express.Router();
const Theater = require('../models/theaterModel');
const Theatre = require('../models/theaterModel');


router.post('/add-theater', async(req, res) => {
    try {
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success: true,
            message: 'New Theatre has been added'
        })
    } catch(err) {
        res.send({
            success: false,
            message: err.message
        })

    }
})

// Admin - Get All theartres - Admin should get all the theatres from differnet Owners
router.get('/get-all-theatres', async (req, res) => {
    try{
        const allTheatres = await Theatre.find().populate({
            path:'owner',
            select:'-password'
        })
        res.send({
            success: true,
            message: "All theatres fetched!",
            data: allTheatres
        });
    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }
});