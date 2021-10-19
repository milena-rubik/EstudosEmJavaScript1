//5 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.

const vogais = ['a','e','i','o','u']
const consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'w', 'z']

let letra = window.prompt('Informe uma letra')
letra = letra.toLowerCase()

if (vogais.indexOf(letra)>-1) document.body.innerHTML = `'${letra}' é uma vogal.` //Captura a posição do elemento no array e verifica se existe, ou seja, se >0
else if (consoantes.indexOf(letra)>-1) document.body.innerHTML = `${letra} é uma consoante.`
else document.body.innerHTML = `Carácter inválido ${letra} não é uma letra`
