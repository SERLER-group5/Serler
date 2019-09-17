const express = require('express');
const app = express();

// routes
const evidenceRoutes = require('../routes/evidenceRecord');

app.use("/", evidenceRoutes);

app.listen(8080);

