const express = require('express');
const router = express.Router();
const triviasCtrl = require('../../controllers/api/trivias');

router.get('/', triviasCtrl.index);
router.post('/', triviasCtrl.create);

module.exports = router;