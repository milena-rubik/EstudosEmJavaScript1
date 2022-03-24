function olatodos() { //cria uma função
    console.log('Bem vindos')
}


function olanome(nome) { //cria função com um parâmetro
    console.log(`Bem vindo(a) ${nome}!`)
}
olanome('Maria Izabel') //chama a função e define o parâmetro, no caso que imprime 'Bem vindo Maria...'

const variavel = olanome('Mabel')
console.log(variavel) //apesar de executar o comando de impressão 'Bem vind...' retorna undefined, uma função retorna valores se usarmos return:

function olanome2(nome){
    return `Bem vindo(a) ${nome}!` //qualquer comando escrito após o return é ignorado, o return é o retorno, o resultado da minha função
}

const variavel2 = olanome2('Brenda') //Atribui o valor de retorno da função a variável
console.log(variavel2) 


function soma(x,y) {
    const resultado = x + y
    return resultado 
}
console.log(soma(3,6))


function soma2(x=1,y=2) { //faz com que caso eu não envie um parÂmetro ao chamar a função, por padrão o x seja 1 e y 2
    const resultado = x + y
    return resultado 
}
console.log(soma2(3,6))
console.log(soma2())



const raiz = function(n) { //outra forma de fazer uma função, chamamos anônima
    return n**0.5;

}; //nesse preciso do ponto e vírgula

console.log(raiz(9))


const raiza = (n) => {return n**0.5;} //outra forma de fazer uma função, chamamos arrow function, funciona igual a de cima
    
console.log(raiza(9))