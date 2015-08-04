var fs = require('fs');
var path = require('path');

var diretorio = process.argv[2];
var extensao = process.argv[3];

fs.readdir(diretorio,function (err, list){
  list.forEach(function (file){
    var extensaoArquivo = path.extname(file).substr(1);
    if(extensaoArquivo === extensao)
      console.log(file);
  });
});
