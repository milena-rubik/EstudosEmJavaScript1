let num1 = 100
let num2 = 1.295854
let num3 = 0.5
let num4 = 0.1
let num5 = 0.6
let num6 = 0.1

console.log(num1+num2); // realiza a operação matemática entre os números
console.log(num1.toString() + num2); //transforma apenas para essa operação o num 1 em string, resultado é concatenação 
console.log(typeof num1); //retorna 'number' provando o mencionado no comentário anterior
console.log(num1.toString(2));//exibe a forma binária
console.log(num2.toFixed(3)); //exibe arredondado em 3 casas decimais
console.log(Number.isInteger(num2)); //retorna verdadeiro ou falso se o número é ou não inteiro

num3 += num4; //matematicamente deveria aparecer 0.6, mas há uma imprecisão e aparece algo como 0.5999... nessas operações
num3 = Number(num1.toFixed(2)); //resolve o problema acima 'parseFloat(num1.toFixed(2))' também servia
num5 +=num6; //mesmo problema da imprecisão
num5 = ((num5*100)+(num6*100))/100 //jeito gambita que funciona também
