const Movie = require('../models/movie');

function index(req, res) {
    Movie.find({})
        .then((movie) => res.json(movie).status(200))
        .then(err => console.log(err));
}

module.exports = {
    index
}