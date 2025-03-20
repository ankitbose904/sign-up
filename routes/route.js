const express = require("express");
const { signup } = require("../controller/controller");

const router = express.Router();

router.post("/signup", signup);

module.exports = router;
