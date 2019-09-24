const express = require("express");
const router = express.Router();

const userService = require("../servicies/UserService");

router.post("/v1/newUser", userService.store);

module.exports = router;