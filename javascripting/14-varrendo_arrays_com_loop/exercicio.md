-------------------
# VARRENDO ARRAYS COM LOOP

Para este desafio usaremos um loop for para acessar e manipular uma lista de valores em um array.

Podemos acessar os valores de um array usando um contador.

Cada item em um array é identificado por um número inteiro, começando do 0.

Então neste array a string hi é identificada pelo número 1:

var greetings = ['hello', 'hi', 'good morning'];

Podemos acessá-la dessa forma:

greetings[1];

Então dentro de um loop for usaríamos a variável i dentro dos colchetes ao invés de usar diretamente um inteiro.

## Desafio:

Crie um arquivo chamado looping-through-arrays.js.

Neste arquivo, defina uma variável chamada pets que referencie este array:

['cat', 'dog', 'rat'];

Crie um loop for que altera cada string no array para o plural.

Você usará uma instrução como esta dentro do loop:

pets[i] = pets[i] + 's';

Depois do loop, use o console.log() para imprimir o array pets no terminal.

Verifique se o seu programa está correto usando o comando:

javascripting verify looping-through-arrays.js

-------------------

 » Para imprimir essas instruções novamente execute: javascripting print
 » Para executar seu programa em um ambiente de testes execute: javascripting run program.js
 » Para que seu programa seja avaliado execute: javascripting verify program.js
 » Para ajuda, execute: javascripting help
