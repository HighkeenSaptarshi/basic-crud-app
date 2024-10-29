const express = require("express");
// const homeController = require('../controller/home.file.controller')
const homeController = require("../controller/home.mongo.controller");

const router = express.Router();

router.post("/user", homeController.addUser);
router.get("/user", homeController.getUser);
router.get("/user/:id", homeController.getUserById);
router.put("/user/:id", homeController.updateUser);
router.delete("/user/:id", homeController.deleteUser);

module.exports = router;
