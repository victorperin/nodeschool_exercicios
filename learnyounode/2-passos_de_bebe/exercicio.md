
 ###Aprendendo Node.js para a mais plena vitória!
───────────────────────────────────────────────
 #PASSOS DE BEBÊ
 ##Exercício 2 de 13

Escreva um programa que aceita um ou mais números como argumentos de linha de comando e imprime a soma desses números no console (stdout).

───────────────────────────────────────────────

## DICAS

Você pode acessar os argumentos da linha de comando através do objeto global process. O objeto process possui uma propriedade argv, a qual é um array contendo a linha de comando completa. Po
r exemplo: process.argv.

Para começar escreva um programa que contém simplesmente:

    console.log(process.argv)

Execute-o usando o comando node program.js e alguns números como argumentos.

Por exemplo:

    $ node program.js 1 2 3

Nesse caso a saída seria um array, algo parecido com isso:

    [ 'node', '/caminho/para/seu/program.js', '1', '2', '3' ]

Você vai precisar pensar sobre como fazer uma repetição (loop) através do número de argumentos para que você possa fornecer apenas a soma deles. O primeiro elemento do array process.argv é sempre 'node' e o segundo elemento é sempre o caminho para seu arquivo program.js, então você precisa começar no terceiro elemento (índice 2), adicionando cada item ao total até que você atinja o fim do array.

Também esteja ciente que todos os elementos do process.argv são string e você pode precisar convertê-los em números. Você pode fazer isso prefixando a propriedade com + ou passando-os como argumento para Number(). Por exemplo: +process.argv[2] ou Number(process.argv[2]).

learnyounode irá fornecer argumentos para seu programa quando você rodar learnyounode verify program.js, então você não precisa se preocupar em fornecê-los. Para testar seu programa sem a verificação, você pode invocá-lo com learnyounode run program.js. Quando você usa run você está invocando o ambiente de testes que o learnyounode prepara para cada exercício.

-------------------------------------------------------------------------------

 #####» Para imprimir essas instruções novamente execute: learnyounode print
 #####» Para executar seu programa em um ambiente de testes execute: learnyounode run program.js
 #####» Para que seu programa seja avaliado execute: learnyounode verify program.js
 #####» Para ajuda, execute: learnyounode help
