const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// Import routes
const clientsRoutes = require("./src/routes/clientsRoutes");
const policiesRoutes = require("./src/routes/policiesRoutes");
const authRoute = require("./src/routes/authRoute");

const port = 8080;
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Routes Middleware
app.use('/api', clientsRoutes);
app.use('/api', policiesRoutes);
app.use('/api', authRoute);

app.listen(port, () => console.log(`App listening on port ${port}!`));