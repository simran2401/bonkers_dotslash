var express = require('express');
var app = express();
var generateFile = require('./generateFile');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post("/run", (req, res) => {
    const { lang, code } = req.body;
    generateFile(lang, code);
    res.status(200).send('');
});

var server = app.listen(8000, function () {
    var port = server.address().port;
    console.log("Server running at http://localhost:%s", port);
});
