const express = require("express");
const router = express.Router();

const authController = require("../../controller/authController");

router.post("/register", authController.register);
<<<<<<< HEAD
=======
router.post("/login", authController.login);
>>>>>>> travel-test

module.exports = router;
