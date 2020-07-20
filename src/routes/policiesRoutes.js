const express = require('express');
const router = express.Router();

// auth header
const header_auth = require("../utils/authHeader");

// Controller module
const policies_controller = require("../controllers/policiesController");

router.get('/policies', policies_controller.policies_list);

router.get("/policies/:id", header_auth.authHeader, policies_controller.policies_id);

//Exporting routers
module.exports = router;

