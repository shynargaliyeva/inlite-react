const Movie = require('../models/movie');

function index(req, res) {
    Movie.find({})
        .then((movie) => res.json(movie).status(200))
        .then(err => console.log(err));
}

function show(req, res) {
    console.log(req.params.id)
    Movie.findById(req.params.id)
        .then((movie) => res.json(user).status(200))
        .catch(err => console.log(err))
}

module.exports = {
    index,
    show
}