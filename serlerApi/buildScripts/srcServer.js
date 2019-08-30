const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("dummy response from serler api");
});

app.listen(8080);