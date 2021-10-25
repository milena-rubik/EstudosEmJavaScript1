//3 – Faça um programa que peça dois números e imprima o maior deles.

let numero1 = Number(window.prompt('Informe o primeiro número'))
let numero2 = Number(window.prompt('Informe o segundo número'))

if (numero1 > numero2) document.body.innerHTML = `O número ${numero1} é o maior`
else if (numero1 < numero2) document.body.innerHTML = `O número ${numero2} é o maior`
else document.body.innerHTML = `Os numeros informados são iguais`
