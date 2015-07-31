var http = require("http");

var urls = process.argv.slice(2);
var respostas = [];
var quantidadeRespostas = 0, characteresResposta=0;

for (i = 0; i < urls.length; i++) {
  respostas[i] = null;
}

for(var x=0;x<urls.length;x++){
  (function(x) {
    http.get(urls[x],function(res) {
      var string = "";
      res.setEncoding("utf8");
      res.on("data", function (data) {
        string+=data;
      });
      res.on("end", function (data) {
        respostas[x] = string;
        characteresResposta+= string.length;
        quantidadeRespostas++;
        printAllStrings();
      });
    });

  })(x);
}

function printAllStrings(){
  if(quantidadeRespostas==urls.length){
    console.log(characteresResposta);
    for(var x=0;x<urls.length;x++){
      console.log(respostas[x]);
    }

  }
}
