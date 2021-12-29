var express = require('express');
var app = express();
const { products } = require('../data');

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/products', (req, res) => {
  res.json(products);
});

var server = app.listen(8000, function () {
  var port = server.address().port;
  console.log('Server running at http://localhost:%s', port);
});
