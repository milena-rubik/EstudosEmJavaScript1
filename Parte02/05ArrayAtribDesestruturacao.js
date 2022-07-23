const numeros = [1,2,3,4,5,6]
const [primeiroNum, segundNum] = numeros; //pega o primeiro elemento e o segundo do array numeros e atribui em cada variavel na ordem disposta
console.log(primeiroNum) //resulta em 1

const lista = ['mortadela', 'margarina', 'leite', 'pao', 'cafe']
const [primeiro, segundo, ,...sobra] = lista //o '...'algumacoisa captura os elementos restantes e insere na variavel algumacoisa, o espaço vazio pula o elemento que não quero
console.log(primeiro) //resulta em mortadela
console.log(sobra) //resulta nos itens de pao para frente