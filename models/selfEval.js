const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const selfEvalSchema = new Schema ({
    q1: {type: Number, min: 0, max: 2},
    q2: {type: Number, min: 0, max: 2},
    q3: {type: Number, min: 0, max: 2},
    q4: {type: Number, min: 0, max: 2},
}, {
    timestamps: true
})

// virtual property to sum up the depScore
selfEvalSchema.virtual('depScore').get(function() {
    return (this.q1 + this.q2 + this.q3 + this.q4);
});



module.exports = mongoose.model("SelfEval", selfEvalSchema);