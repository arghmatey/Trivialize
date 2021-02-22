const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

router.post('/signup', usersCtrl.signup); // user signs up
router.post('/login', usersCtrl.login); // user logs in
router.post('/skills', usersCtrl.skills); // post skills 

module.exports = router;