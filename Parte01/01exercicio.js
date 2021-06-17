const nome = 'Milena'; //declara constante
const sobrenome = 'Rubik Peres';
const peso = 65.5;
const altura = 1.68
const idade = 25
let imc; //declara variável
let anonascimento;
imc = peso / (altura*altura);
anonascimento = 2021 - 25;
console.log(nome, sobrenome,'nasceu em',anonascimento,'e tem IMC',imc); //função exibe mensagem no console
console.log(`Ela tem ${nome} na verdade`); //outra forma de inserir variável numa string é iniciar com crase e colocar ${variavel}