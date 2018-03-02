const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const selfEvalSchema = new Schema ({
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number
}, {
    timestamps: true
})

// virtual property to sum up the depScore
selfEvalSchema.virtual('depScore').get(function() {
    return (this.q1 + this.q2 + this.q3 + this.q4);
});

module.exports = mongoose.model("SelfEval", selfEvalSchema);