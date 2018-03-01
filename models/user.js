var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

var userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    movies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}],
    selfeval: [{type: mongoose.Schema.Types.ObjectId, ref: 'SelfEval'}]
}, {
    timestamps: true
    });

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        // remove the password property when serializing doc to JSON
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    //password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        //override the user provided password with the hash
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb)
}

module.exports = mongoose.model('User', userSchema);