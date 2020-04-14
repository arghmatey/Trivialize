const express = require('express');
const router = express.Router();
const questionsCtrl = require('../../controllers/api/questions');

router.get('/', questions.Ctrl.index);

module.exports = router;