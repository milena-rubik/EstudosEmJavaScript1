
//Faça um programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.4

let fahrenheit = window.prompt('Informe a temperatura em graus Fahrenheit: ')
let celsius = 5*(((parseFloat(fahrenheit))-32)/9)
document.body.innerHTML += `A temperatura de ${fahrenheit} graus Fahrenheit em graus Celsius é de ${celsius.toFixed(2)}` //'.toFixed(x)' arredonda em x casas decimais
