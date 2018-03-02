const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: String,
    genre: String,
    runtime: String,
    year: Number,
    synopsis: String,
    psychologist: String,
    recommend: String,
    learn: String,
    warning: String,
    image: String,
    levelOne: Boolean,
    levelTwo: Boolean,
    levelThree: Boolean
})

module.exports = mongoose.model('Movie', movieSchema);