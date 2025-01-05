const express = require('express');
const { getAllUsers, createUser, getUserById } = require('../controllers/userController');
const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);

module.exports = router;
