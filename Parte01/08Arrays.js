const minhalista = ['chocolate',2,true] //podemos criar array com tipos diferentes mas não é boa prática de programação
console.log(minhalista[2]) //acessa o elemento 'true' no array, elemento de posição 2
minhalista[1] = 6 //altera o valor do elemento de índice 1 para '6'
minhalista[4] = 'Maria' //crio um novo elemento no array na posição 4,a anterior (3) também não existia, assim foi criada também mas como undefined
console.log(minhalista) 
console.log(minhalista.length) //informa o tamhanho, o n° de elementos do vetor
minhalista[minhalista.length] = 'fome' //adiciona o elemento 'fome' na última posição
console.log(minhalista) 
minhalista.push(true) //adiciona 'true' ao fim da lista
console.log(minhalista)
minhalista.unshift('café') //adiciona 'café' ao início da lista
console.log(minhalista)
minhalista.pop() //remove o último elemento
console.log(minhalista)
const removido = minhalista.pop() //atribui o ultimo elento a uma variável e o remove da lista
console.log(removido)
console.log(minhalista)
delete minhalista[1] //deleta o elemento de índice 1 e não altera os demais índices, no lugar do elemento de posição 1 constará <1 empty item>
console.log(minhalista)

const outralista = ['maça','banana','aveia','mingau']
outralista.slice(0,-2) //remove os dois últimos elementos do vetor, determina o tamanho do que deve ficar
console.log(outralista)

//IMPORTANTE!!!!
// Ao criarmos algo como a = 5 e b = a, por ser primitivo uma cópia do valor de 'a' era armazenada em 'b'. Em arrays por não ser do tipo primitivo, que é imutável, mas do
//tipo referência, que é mutável, se eu fizer a = [5,6] e b = a, o valor de 'b' irá apontar para 'a', e não fazer uma cópia, ou seja, se mudo 'a', automaticamente a mudança
//é aplicada a 'b'. E se eu alterar 'b', também mudo o valor de 'a'. Em resumo apontam ao mesmo local na memória e se mexer em um mexe no outro.
//Consigo criar uma cópia independente assim: b = [...a]. Para objetos também funciona assim.
