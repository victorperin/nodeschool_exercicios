var net = require('net');

var doisDigitos = (function(numero){
  return ("0" + numero).slice(-2);
});

var date = new Date();

var ano = date.getFullYear();
var mes = doisDigitos(date.getMonth() + 1);
var dia = doisDigitos(date.getDate());
var hora = doisDigitos(date.getHours());
var minutos = doisDigitos(date.getMinutes());

var data = ano + "-" + mes + "-" + dia + " " + hora + ":" + minutos + "\n";

var server = net.createServer(function (socket) {
  socket.write(data);
  socket.end();
})
server.listen(process.argv[2]);
