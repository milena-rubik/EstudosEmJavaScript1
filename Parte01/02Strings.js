let texto = 'Maria roubou pão na casa do João (...) Então quem foi? Só pode ter sido a Maria!'

console.log(texto.indexOf('pão')) //fornece a posição da letra inicial do que está sendo buscado
console.log(texto.length) //fornece tamanho da string
console.log(texto.replace(/Maria/g, 'Meg')) //Maria entre barras e 'g' depois da última barra faz com que todas as palavras Marias sejam substituidas por 'Meg'
console.log(texto.replace('Meg', 'Dalila')) //substitui a primeira palavra, no caso Maria, encontrada no texto por Meg
console.log(texto.split('casa')) //retira o indicado entre '' e quebra a string nesses pontos inserindo as partes como elementos de um vetor
console.log(texto.toLowerCase()) //coloca o texto todo em minúscula
console.log(texto.toUpperCase()) //coloca o texto todo em maiúscula

//Para saber mais sobre strings consulte a documentação javascript nos sites W3SCHOOLS e MDN