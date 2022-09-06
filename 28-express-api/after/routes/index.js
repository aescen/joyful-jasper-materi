const express = require('express');
const router = express.Router()

const moviesRouter = require('./movies.route');

router.get("/", (req, res) => {
  res.json("Express App")
})

router.use("/movies", moviesRouter)
// router.use("/user", userRouter)
// router.use("/category", categoryRouter)

module.exports = router