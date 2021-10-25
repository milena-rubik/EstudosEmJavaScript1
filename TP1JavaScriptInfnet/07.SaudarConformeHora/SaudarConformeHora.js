//7 – Faça um programa que imprima “Bom dia”, “Boa tarde” ou “Boa noite” dependendo da hora do dia. Dica: use a classe Date.

const dia = new Date
let hora = dia.getHours()

if (hora < 13) document.body.innerHTML = 'Bom dia!'
else if (hora > 18) document.body.innerHTML = 'Boa noite!'
else document.body.innerHTML = 'Boa tarde!'