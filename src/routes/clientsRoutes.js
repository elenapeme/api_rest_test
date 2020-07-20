const express = require('express');
const router = express.Router();

// auth header
const header_auth = require("../utils/authHeader");

// Controller module
const clients_controller = require("../controllers/clientsController");

// clients list route
router.get('/clients', header_auth.authHeader, clients_controller.clients_list);

// client id route
router.get("/clients/:id", header_auth.authHeader, clients_controller.client_id);

router.get("/clients/:id/policies", header_auth.authHeader, clients_controller.client_policies);

//Exporting routers
module.exports = router;

