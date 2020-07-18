const express = require('express');
const router = express.Router();

// Controller modules
const clients_controller = require("../controllers/clientsController");

router.get('/', function (req, res) {
    res.send('Birds home page')
});

// admin route
router.get('/clients', clients_controller.clients_list);

// client route
router.get('/clients2', clients_controller.clients_list);

// client id route
router.get("/clients/:id", clients_controller.client_id);

//Exporting routers
module.exports = router;

