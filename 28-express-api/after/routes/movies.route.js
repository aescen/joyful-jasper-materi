const express = require('express');
const router = express.Router()

const {getAllMovies, getMovieByID, addMovie} = require('../controllers/movies.controller');

// app diganti router
// /movies nya dihapus

router.get("/", getAllMovies)

router.get("/:id", getMovieByID)

const khususPOST = (req, res, next) => {
  console.log("khusus POST")
  next()
}

router.post("/", khususPOST, addMovie)

// PUT /movies/:id - update by ID

// DELETE /movies/:id - delete by ID

module.exports = router