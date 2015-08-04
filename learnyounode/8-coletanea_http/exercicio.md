Aprendendo Node.js para a mais plena vitória!
───────────────────────────────────────────────
#COLETÂNEA HTTP
##Exercício 8 de 13

Escreva um programa que realize uma requisição HTTP GET em uma URL fornecida por você como o primeiro argumento na linha de comando. Pegue todos os dados ("data") do servidor (não apenas o primeiro evento "data") e então escreva duas linhas no console (stdout).

A primeira linha você vai escrever deve apenas ser um inteiro representando o número de caracteres recebidos do servidor, e a outra linha deve conter a String completa de caracteres enviados pelo servidor.

───────────────────────────────────────────────
## DICAS

Existem duas abordagens para você resolver este problema:

1) Coletar dados através de múltiplos eventos "data" e anexar os resultados antes de imprimí-los na saída. Use o evento "end" para determinar quando a stream (o fluxo) terminou e então você pode imprimir a saída.

2) Use um pacote de terceiros para abstrair as dificuldades envolvidas em coletar uma stream inteira de dados. Dois pacotes diferentes fornecem uma API útil para resolver este problema (existem mais parecidos!): bl (Buffer List) e concat-stream; faça sua escolha!

 <http://npm.im/bl>
 <http://npm.im/concat-stream>

Para instalar um pacote Node, use o Node Package Manager npm. Apenas digite:

   $ npm install bl

E isso vai fazer o download e instalar a última versão do pacote dentro de um sub-diretório chamado node_modules. Qualquer pacote neste sub-diretório sob seu arquivo principal do programa poderá carregá-lo com a sintaxe require sem ser precedido por ./:

   var bl = require('bl')

Node vai primeiro olhar dentro dos módulos do núcleo e então dentro do diretório node_modules onde o pacote está localizado.

Se você não tem uma conexão com a internet, simplesmente crie um diretório node_modules e copie o diretório inteiro do pacote que você gostaria de usar dentro do diretório de instalação da sua aplicação.

 file:///usr/lib/node_modules/learnyounode/node_modules/bl
 file:///usr/lib/node_modules/learnyounode/node_modules/concat-stream

Ambos bl e concat-stream pode ter uma stream piped (canalizada) dentro deles e então vão coletar os dados para você. Uma vez que a stream terminou, um callback vai ser disparado com os dados:

   response.pipe(bl(function (err, data) { /* ... */ }))
   // ou
   response.pipe(concatStream(function (data) { /* ... */ }))

Note que você provavelmente vai precisar de data.toString() para converter o Buffer.

A documentação para ambos estes módulos foram instaladas juntamente com learnyounode em seu sistema e você pode lê-las direcionando seu navegador aqui:

 file:///usr/lib/node_modules/learnyounode/docs/bl.html
 file:///usr/lib/node_modules/learnyounode/docs/concat-stream.html

-------------------------------------------------------------------------------

#####» Para imprimir essas instruções novamente execute: learnyounode print
#####» Para executar seu programa em um ambiente de testes execute: learnyounode run program.js
#####» Para que seu programa seja avaliado execute: learnyounode verify program.js
#####» Para ajuda, execute: learnyounode help
