let movies = [
  {id: 1, title: "Thor"},
  {id: 2, title: "Minions"},
  {id: 3, title: "Jurassic World"},
]

module.exports = {
  getAllMovies: (req, res) => {
    res.json(movies)
  },

  getMovieByID: (req, res) => {
    const id = req.params.id
    const movie = movies.find((item) => item.id == id)
    res.json(movie)
  },

  addMovie: (req, res) => {
    const movie = req.body
    movies.push(movie)
    res.json("berhasil menambahkan movie")
  }
}