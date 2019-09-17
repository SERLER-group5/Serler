const express = require('express');
const app = express();

// routes
const articleRoutes = require('../routes/articles');

app.use("/", articleRoutes);

app.listen(8080);

