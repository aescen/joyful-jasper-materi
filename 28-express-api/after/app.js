const express = require('express');

const rootRouter = require('./routes');

const app = express()
const PORT = process.env.PORT || 3000

const customMiddleware = (req, res, next) => {
  console.log(req.path);
  next()
}

// middleware
app.use(express.json())
app.use(customMiddleware)
app.use(rootRouter)

// app.get /movies
// pindahin ke /routes/movies.js

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})
