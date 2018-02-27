var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var userCtrl = require('../../controllers/users');

/* --------- Public Routes --------- */
// router.post('/signup', usersCtrl.signup);
// router.post('/login', usersCtrl.login);

module.exports = router;
