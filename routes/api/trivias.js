const express = require('express');
const router = express.Router();
const triviasCtrl = require('../../controllers/api/trivias');

router.get('/', triviasCtrl.index);
router.get('/:id', triviasCtrl.show);
router.post('/', triviasCtrl.create);
router.delete('/:id', triviasCtrl.delete);

module.exports = router;