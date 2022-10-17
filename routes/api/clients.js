const express = require('express');

const router = express.Router();

const { clients: ctrl } = require('../../controllers');
const { ctrlWrapper } = require('../../middlewares');

router.get('/', ctrlWrapper(ctrl.getClients));
router.post('/add', ctrlWrapper(ctrl.addClient));

module.exports = router;