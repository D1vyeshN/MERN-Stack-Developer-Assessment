const express = require("express");
const { registerUser, loginUser } = require("../controller/auth-controller");

const router = express.Router();

router.post('/register', registerUser)
    .post('/login', loginUser)

exports.router = router;