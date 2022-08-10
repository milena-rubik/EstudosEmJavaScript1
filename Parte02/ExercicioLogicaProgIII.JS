/*Escreva uma função que recebe um número e retorna:
- Fizz: se divisível por 3;
- Buzz: se divisível por 5;
- FizzBuzz: se divisível por 3 e 5;
- O próprio número: se não divisível nem por 3 nem por 5;
A função deve checar se o informado é realmente um número
Depois teste a função de 0 a 100.*/

function Divisao3e5 (num){
    if (isNaN(num)){ //Verifica se num não é um número
        return 'Entrada não numérica'
    } 

    else if (num%3===0 && num%5==0){ //se o resto das divisões de num por 3 E por 5 forem 0 executa o bloco
        return 'FizzBuzz'
    }
    else if (num%3===0){
        return 'Fizz'
    }
    else if (num%5===0){
        return 'Buzz'
    }
    else return num
    }

//ÁREA DE TESTES

console.log(Divisao3e5('testandoComString'))

for(let i =0; i<=100;i++){
    console.log(Divisao3e5(i))
}


//Solução mais compacta de um colega
const fizzBuzz = (num) => {
    return (isNaN(num)) ? `${num} não é um número válido.` :
        ((num % 3 == 0) && (num % 5 == 0)) ? `FizzBuzz` :
        (num % 3 == 0) ? `Fizz` :
        (num % 5 == 0) ? `Buzz` : num;
};