const express = require('express');
// const homeController = require('../controller/home.file.controller')
const homeController = require('../controller/home.mongo.controller')

const router = express.Router();

router.post('/add-user', homeController.addUser);
router.get('/get-user', homeController.getUser);
router.get('/get-user/:id', homeController.getUserById);
router.put('/update-user/:id', homeController.updateUser);
router.delete('/delete-user/:id', homeController.deleteUser);

module.exports = router;