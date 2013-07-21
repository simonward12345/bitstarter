var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());
var buff = new Buffer(fs.readFile('index.html'));
var content = buff.toString;
app.get('/', function(request, response) {
  var f = fs.readFile('index.html');
  response.send(content);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
