var soma = 0;
for(var x=2;x<process.argv.length;x++){
  soma += Number(process.argv[x]);
}
console.log(soma);
