var fs = require('fs');

fs.readFile(process.argv[2],'utf8',function (err, data) {
  var linhasArquivo = data.split("\n");
  console.log(linhasArquivo.length - 1);
});
