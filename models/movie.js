const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: String,
    Runtime: Number,
    Year: Number,
    Synopsis: Text,
    Pschologist: String,
    Recommend: Text,
    Learn: Text,
    Warning: Text,
    Psyches: []
})

module.exports = mongoose.model('Movie', movieSchema);