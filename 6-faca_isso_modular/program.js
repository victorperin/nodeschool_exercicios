var modulo = require("./modulo");

var diretorio = process.argv[2];
var extensao = process.argv[3];

modulo(diretorio,extensao,function(err,data){
  if(err)
    return console.error("Houve um erro: "+ err);
  data.forEach(function (arquivo){
    console.log(arquivo);
  });
});
