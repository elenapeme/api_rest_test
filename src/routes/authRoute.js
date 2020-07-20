const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
// Controller modules
const auth_controller = require("../controllers/authController");

router.post("/login", jsonParser, auth_controller.auth_user);

//Exporting router
module.exports = router;