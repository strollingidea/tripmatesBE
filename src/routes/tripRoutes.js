const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller");
const { createTrip } = require("../controllers/tripController");

router.post("/create", createTrip);

module.exports = router;
