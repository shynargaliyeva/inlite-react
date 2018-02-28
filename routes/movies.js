var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var moviesCtrl = require('../controllers/movies');

/*---------- Protected Routes ----------*/


module.exports = router;

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'not authorized' });
}