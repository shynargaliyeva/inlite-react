var express = require('express');
var router = express.Router();
var movieCtrl = require('../../controllers/movies');

router.get('/dashboard', movieCtrl.index)

module.exports = router;