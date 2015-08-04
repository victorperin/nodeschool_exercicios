var http = require('http');
var fs = require('fs');

var filename = process.argv[3];

var server = http.createServer(function(req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  var src = fs.createReadStream(filename);
  src.pipe(res);
});
server.listen(process.argv[2]);
