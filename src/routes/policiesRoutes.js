const express = require('express');
const router = express.Router();
const app = express();
const paginate = require('express-paginate');
app.use(paginate.middleware(10, 10));

// Controller modules
const policies_controller = require("../controllers/policiesController");

router.get('/policies', policies_controller.policies_list);

router.get("/policies/:id", policies_controller.policies_id);

//Exporting routers
module.exports = router;

