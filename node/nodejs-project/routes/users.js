const express = require('express');
const usersController = require('../controllers/users');

const router = express.Router();

router.post('/users', usersController.saveUser);
router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUser);
router.post('/users/:id', usersController.updateUser);
router.put('/users/:id', usersController.removeUser);

module.exports = router;
