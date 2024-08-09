const express = require('express');
const homeController = require('../controller/home.controller')

const router = express.Router();

router.post('/add-user', homeController.addUser);
router.get('/get-user', homeController.getUser);
router.put('/update-user/:id', homeController.updateUser);
router.delete('/delete-user/:id', homeController.deleteUser);

module.exports = router;