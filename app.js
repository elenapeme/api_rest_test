const express = require('express');
const app = express();
const paginate = require('express-paginate');

// Import routes
const clientsRoutes = require("./src/routes/clientsRoutes");
const policiesRoutes = require("./src/routes/policiesRoutes");

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(paginate.middleware(10, 10));

// Routes Middleware
app.use('/', clientsRoutes);
app.use('/', policiesRoutes);

app.listen(port, () => console.log(`App listening on port ${port}!`));
