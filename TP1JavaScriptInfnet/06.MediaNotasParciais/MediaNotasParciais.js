//6 – Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
//a) A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete.
//b) A mensagem “Reprovado”, se a média for menor do que sete.
//c) A mensagem “Aprovado com distinção”, se a média for igual a dez

let nota1 = parseFloat(window.prompt('Informe a 1° nota de 0 a 10: '))
let nota2 = parseFloat(window.prompt('Informe a 2° nota de 0 a 10: '))

media = (Math.round(((nota1+nota2)/2)*100)) /100

if (media==10) document.body.innerHTML = 'Aprovado com distinção'
else if (media>=7) document.body.innerHTML = 'Aprovado'
else document.body.innerHTML = 'Reprovado'
