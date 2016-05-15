var express = require('express');
var app = express();
var Morgan = require('morgan');
app.use(Morgan('dev'));

app.get('/test', function(request, response){
  response.send("Hello World");
});
app.use("/", express.static(__dirname + '/public'));
var server = app.listen(process.env.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
