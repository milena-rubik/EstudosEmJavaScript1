/*Escreva uma função chamada Epaisagem que recebe dois argumentos, largura e altura de uma imagem
e reorne true se a imagem estiver no modo paisagem*/

const Epaisagem = (l,a) => l>a? true:false; //operação ternária: recebe argumentos, testa a condição, se atender retorna a opção 1, no caso 'true'

//Testes
console.log(Epaisagem(9,3))
console.log(Epaisagem(3,3))
console.log(Epaisagem(2,6))

//Solução mais compacta do professor:
const Epaisagem2 = (l,a) => l>a //quando quero boolean não preciso determinar as opções de retorno na operação ternária, já retorna boolean por padrão.
