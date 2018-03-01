var express = require('express');
var router = express.Router();
var movieCtrl = require('../../controllers/movies');

router.get('/', movieCtrl.index)

module.exports = router;