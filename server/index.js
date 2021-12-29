var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8000, function () {
    var port = server.address().port
    console.log("Server running at http://localhost:%s", port)
})