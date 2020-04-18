const express = require('express');
const router = express.Router();
const triviasCtrl = require('../../controllers/api/trivias');

router.get('/', triviasCtrl.index);

router.use(require('../../config/auth'));
router.get('/:id', triviasCtrl.show);
router.post('/', triviasCtrl.create);
router.delete('/:id', triviasCtrl.delete);
router.put('/:id', triviasCtrl.update)

module.exports = router;