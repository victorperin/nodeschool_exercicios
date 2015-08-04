var http = require("http");

var url = process.argv[2];

  http.get(url, function(res) {
    var string = "";
    res.setEncoding("utf8");
    res.on("data", function (data) {
      string+=data;
    });
    res.on("end", function (data) {
      console.log(string.length); //Não encontrei em lugar algum, no exercício, para colocar isso. Mas para que ele seja concluido, é necessário usar-lo.
      console.log(string);
    });
  });
