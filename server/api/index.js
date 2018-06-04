const express = require('express');

const users = require('./users');

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));
router.use('/docs', express.static('docs'));

router.use('/users', users);

module.exports = router;