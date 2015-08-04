-------------------
# FAZENDO LOOP COM FOR

Loops com for são dessa forma:

for (var i = 0; i < 10; i++) {
  // log the numbers 0 through 9
  console.log(i)
}

A variável i é usada para rastrear a quantidade de vezes em que o loop foi executado.

A expressão i < 10; indica o limite do loop.
O loop continuará se o valor da variável i for menor que 10.

A expressão i++ incrementa o valor da variável i á cada iteração.

## Desafio:

Crie um arquivo chamado for-loop.js.

No arquivo que você acabou de criar, defina uma variável chamada total e inicialize ela com o valor 0.

Defina uma segunda variável chamada limit e inicialize ela com o valor 10.

Crie um loop for com a variável i iniciando do 0 aumentando por um 1 á cada iteração. O loop deverá correr enquanto o valor de i for menor que o valor de limit.

Á cada iteração do loop, adicione o número do i á variável total. Para fazer isto, você pode usar a seguinte expressão:

total += i;

Após o loop, use o console.log() para imprimir a variável total ao terminal.

Verifique se o seu programa está correto executando este comando:

javascripting verify for-loop.js

-------------------

 » Para imprimir essas instruções novamente execute: javascripting print
 » Para executar seu programa em um ambiente de testes execute: javascripting run program.js
 » Para que seu programa seja avaliado execute: javascripting verify program.js
 » Para ajuda, execute: javascripting help
