const Movie = require('../models/movie');
const User = require('../models/user');
const SelfEval = require('../models/selfEval');

function index(req, res) {
    Movie.find({})
        .then((movie) => res.json(movie).status(200))
        .then(err => console.log(err));
}

function show(req, res) {
    Movie.findById(req.params.id)
        .then((movie) => res.json(user).status(200))
        .catch(err => console.log(err))
}

module.exports = {
    index,
    show
}