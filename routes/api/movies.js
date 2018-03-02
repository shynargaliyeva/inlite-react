var express = require('express');
var router = express.Router();
var moviesCtrl = require('../../controllers/movies');

router.get('/dashboard', moviesCtrl.index)
router.get('/dashboard/:id', moviesCtrl.show)

module.exports = router;

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'not authorized' });
}