const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const customMiddleware = (req, res, next) => {
  console.log(req.path);
  next();
};

// middleware
app.use(express.json());
app.use(customMiddleware);

let movies = [
  { id: 1, title: "Thor" },
  { id: 2, title: "Minions" },
  { id: 3, title: "Jurassic World" },
];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((item) => item.id == id);
  res.json(movie);
});

app.post("/movies", (req, res) => {
  const movie = req.body;
  movies.push(movie);
  res.json("berhasil menambahkan movie");
});

// PUT /movies/:id - update by ID

// DELETE /movies/:id - delete by ID

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
