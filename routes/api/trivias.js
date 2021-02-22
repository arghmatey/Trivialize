const express = require('express');
const router = express.Router();
const triviasCtrl = require('../../controllers/api/trivias');

router.get('/', triviasCtrl.index); // shows all
router.use(require('../../config/auth')); // auth required
router.get('/:id', triviasCtrl.show); // show specific
router.post('/', triviasCtrl.create); // create one
router.delete('/:id', triviasCtrl.delete); // delete specific
router.put('/:id', triviasCtrl.update) // update specific

module.exports = router;