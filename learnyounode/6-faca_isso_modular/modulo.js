var fs = require("fs");
var path = require("path");

module.exports = function (diretorio,extensao,callback) {
  fs.readdir(diretorio,function (err, list){
    if(err){
      return callback(err);
    }
    var arquivos = [];
    list.forEach(function (file){
      var extensaoArquivo = path.extname(file).substr(1);
      if(extensaoArquivo === extensao){
        arquivos.push(file);
      }
    });
    return callback(false,arquivos);
  });
}
