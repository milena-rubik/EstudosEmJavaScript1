/* Para um dado número a saída deve ser 
É inteiro? True ou False 
É NaN? True ou False
Valor arredondado para baixo:
Valor arredondado para cima:
Valor com duas casas decimais:
*/

num = Number(prompt('Informe um número'))

console.log('É inteiro?', Number.isInteger(num))
console.log('É um NaN?',Number.isNaN(num))
console.log('Valor arredondado para baixo: ',Math.floor(num))
console.log('Valor arredondado para cima: ',Math.ceil(num))
console.log('Valor com duas casas decimais: ',num.toFixed(2))