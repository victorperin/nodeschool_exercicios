-------------------
# MODIFICANDO STRINGS

Frequentemente você precisará mudar o conteúdo de uma string.

As strings tem funcionalidades que te permitem inspecionar e manipular seus conteúdos.

Aqui está um exemplo que usa o método .replace():

var example = 'this example exists';
example = example.replace('exists', 'is awesome');
console.log(example);

Perceba que para mudar o valor da string da variável example, nós precisamos
usar o sinal = novamente, desta vez com o método example.replace() no lado
direito dele.

## Desafio:

Crie um arquivo chamado revising-strings.js.

Defina uma variável chamada pizza que referencia esta string: pizza is alright

Use o método .replace() para modificar o alright para wonderful.

Use o console.log() para imprimir o resultado do método .replace() no terminal.

Verifique se o seu programa está correto executando este comando:

javascripting verify revising-strings.js

-------------------

 » Para imprimir essas instruções novamente execute: javascripting print
 » Para executar seu programa em um ambiente de testes execute: javascripting run program.js
 » Para que seu programa seja avaliado execute: javascripting verify program.js
 » Para ajuda, execute: javascripting help
