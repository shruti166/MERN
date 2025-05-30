const express = require("express");
const router = express.Router();

const Movie = require("../models/movieModel");

// add a movie

router.post("/add-movie", async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.send({ success: true, message: "New Movie has been added" });
  } catch (err) {
    res.send({ success: false, message: err.message });
  }
});

// get all the movies

router.get("/get-movies", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.send({
      success: true,
      message: "All movies recieved",
      data: allMovies,
    });
  } catch (err) {
    res.send({ success: false, message: err.message });
  }
});

// update a movie
router.put("/update-movie", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.body.movieId, req.body);
    res.send({
      success: true,
      message: "The movie has been updated!",
      data: movie,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

// delete a movie

// Homework

// Fetch single Movie with id

router.get("/movie/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.send({
      success: true,
      message: "Movie fetched successfully!",
      data: movie,
    });
  } catch (error) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

router.post("/delete-movie", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.body.movieId);
    console.log(req.body.movieId);
    res.send({
      success: true,
      message: "The movie has been deleted!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
