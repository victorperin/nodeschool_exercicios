var fs = require('fs');

var textoArquivo = fs.readFileSync(process.argv[2],'utf8');
var linhasArquivo = textoArquivo.split("\n");

console.log(linhasArquivo.length - 1);
