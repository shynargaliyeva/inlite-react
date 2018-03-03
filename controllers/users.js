var User = require('../models/user');
var SelfEval = require('../models/selfEval');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

module.exports = {
    signup,
    login,
    selfEval
}

function signup(req, res) {
    var user = new User(req.body);
    user.save()
        .then(user => {
            // TODO: Send back a JWT instead of the user
            res.json({ token: createJWT(user) });
        })
        // User data invalid
        .catch(err => res.status(400).json(err));
}

function login(req, res) {
    User.findOne({ email: req.body.email }).exec().then(user => {
        if (!user) return res.status(401).json({ err: 'bad credentials' });
        user.comparePassword(req.body.pw, (err, isMatch) => {
            if (isMatch) {
                var token = createJWT(user);
                res.json({ token });
            } else {
                return res.status(401).json({ err: 'bad credentials' });
            }
        });
    }).catch(err => res.status(401).json(err));
}

function createJWT(user) {
    return jwt.sign(
        { user }, // data payload
        SECRET,
        { expiresIn: '24h' }
    );
}

// SelfEval functions

function selfEval(req, res) {
    let selfEval = new SelfEval;
    selfEval.q1 = req.body.q1
    selfEval.q2 = req.body.q2
    selfEval.q3 = req.body.q3
    selfEval.q4 = req.body.q4

    selfEval.save((err) => {
        console.log(selfEval.depScore)
        res.json('this worked').status(200)
    })
}

