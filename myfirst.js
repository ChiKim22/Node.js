var http = require('http');
var dt = require('./second.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'ContentType' : 'text/html;charset=utf8, MyName : JHK'}); //json문법
  res.end('Hello World! : ' + dt.myDateTime());
}).listen(8081);
