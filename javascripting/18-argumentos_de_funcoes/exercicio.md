-------------------
# ARGUMENTOS DE FUNÇÕES

Podemos declarar uma função que recebe qualquer quantidade de argumentos. Os argumentos podem ser de qualquer tipo. Um argumento poderia ser uma string, um número, um array, um objeto e até mesmo outra função.

Aqui está um exemplo:

function example (firstArg, secondArg) {
  console.log(firstArg, secondArg);
}

Podemos chamar essa função passando dois argumentos dessa forma:

example('hello', 'world');

O exemplo acima irá imprimir no terminal hello world.

## Desafio:

Crie um arquivo chamado function-arguments.js.

Nesse arquivo, defina uma função chamada math que recebe 3 argumentos. É importante compreender que o nome dos argumentos são usados somente para referenciá-los.

Dê um nome para cada argumento da maneira que você quiser.

A função math deverá multiplicar o segundo e o terceiro argumento, e então somar o primeiro argumento ao resultado da multiplicação e então retornar o valor obtido.

Depois disso, dentro dos parênteses do console.log(), chame a função math() com o número 53 como primeiro argumento, 61 como segundo e 67 como terceiro argumento.

Verifique se o seu programa está correto executando esse comando:

javascripting verify function-arguments.js

-------------------

 » Para imprimir essas instruções novamente execute: javascripting print
 » Para executar seu programa em um ambiente de testes execute: javascripting run program.js
 » Para que seu programa seja avaliado execute: javascripting verify program.js
 » Para ajuda, execute: javascripting help
