var http = require('http');
var url = require("url");

var charset = "; charset=utf-8";



var toDate = function (isoString,mode){
  var date = new Date(isoString);
  if ( date === "Invalid Date" || isNaN(date) )
    return undefined;
  if(mode===1)
    var timeObject = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
  if(mode===2)
    var timeObject = {
      "unixtime": date.getTime()
    }
  return timeObject;
}


var teste = "";
var server = http.createServer(function(req, res){
  if (req.method == 'GET') {
    var urlReceived = url.parse(req.url, true);
    switch(urlReceived.pathname){
      case "/api/parsetime":
        res.writeHead(200, { 'Content-Type': 'application/json' + charset });
        var data = toDate(urlReceived.query.iso,1);
        res.end(JSON.stringify(data));
        break;
      case "/api/unixtime":
        res.writeHead(200, { 'Content-Type': 'application/json' + charset });
        var data = toDate(urlReceived.query.iso,2);
        res.end(JSON.stringify(data))
        break;
      default:
        res.writeHead(404,{'content-type': 'text/plain' + charset});
        res.end("Em construção!");
    }
    console.log(urlReceived.pathname);
  }
});
server.listen(process.argv[2]);
