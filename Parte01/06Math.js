let num1 = 9.6545;
let num2 = Math.floor(num1); //arredonda para baixo, teriamos 9
console.log(num2);
let num3 = Math.ceil(num1); //arredonda para cima, teriamos 10
console.log(num3);
let num4 = Math.round(num1); //arredonda para o mais próximo, teriamos 10

console.log(Math.max(num1,num2,num3)); // retorna o maior número
console.log(Math.min(num1,num2,num3)); // retorna o menor número

let aleatorio = Math.random(); //gera número aleatório entre 0 e 1
console.log(aleatorio);
let aleatoriodef = Math.random()*(10-5)+5; //gera número aleatório com definição intervalo, nesse caso entre 5 e 10.
console.log(aleatoriodef);