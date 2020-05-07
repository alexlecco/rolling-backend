const express = require('express');
const controller = require('../controllers/auth');

const router = express.Router();

router.post('/auth', controller.login);

module.exports = router;