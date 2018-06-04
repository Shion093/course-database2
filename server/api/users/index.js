const express = require('express');

const { create } = require('./actions');

const router = express.Router();

router.route('/create').post(create);

module.exports = router;
