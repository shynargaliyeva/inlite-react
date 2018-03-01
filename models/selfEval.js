const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const selfEvalSchema = new Schema ({
    selfEval: {type: String, enum: ["1", "2", "3"]}
}, {
    timestamps: true
})

module.exports = mongoose.model("SelfEval", selfEvalSchema);