var http = require('http');

var teste = "";
var server = http.createServer(function(req, res){
  if (req.method == 'POST') {
    req.on('data', function(chunk) {
      teste += chunk.toString().toUpperCase();
    });
    req.on('end', function(chunk){
      res.end(teste);
    })
  }
});
server.listen(process.argv[2]);
