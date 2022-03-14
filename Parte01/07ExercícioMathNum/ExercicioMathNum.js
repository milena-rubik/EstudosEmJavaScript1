/* Para um dado número a saída deve ser 
É inteiro? True ou False 
É NaN? True ou False
Valor arredondado para baixo:
Valor arredondado para cima:
Valor com duas casas decimais:
*/

const num = Number(prompt('Informe um número'))
const numerotitulo = document.getElementById('numero') //seleciona o elemento 'numero' dentro do html e atribui isso a variável numerotitulo
const texto = document.getElementById('texto') //seleciona o elemento 'texto' dentro do html

numerotitulo.innerHTML = num
texto.innerHTML =  `<p> É inteiro? ${Number.isInteger(num)}</p>`
texto.innerHTML += `<p> É um NaN? ${Number.isNaN(num)}</p>`
texto.innerHTML += `<p> Valor arredondado para baixo: ${Math.floor(num)}</p>`
texto.innerHTML += `<p> Valor arredondado para cima: ${Math.ceil(num)}</p>`
texto.innerHTML += `<p> Valor com duas casas decimais: ${num.toFixed(2)}</p>`

