function teste(){
    console.log('testando')
}

teste(4, 'oi') //No Javascrip executa igual se eu inserir parâmetro em função que não tem

//Porém não é que o javaScript ignora, mas para as funções declaradas usando a palavra 'function' ele automaticamente envia o 
//que eu inseri como argumento para 'arguments'. Segue exemplos :

function testeArguments(){
    console.log(arguments)
}
testeArguments('Olhem isso!',1,2)

function soma(){
    let total = 0
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total)
}
soma(1,4,5,7,9)


//Quando quero definir um valor padrão para os parâmetros caso a função seja chamada sem argumentos:

function soma2(a=0,b=0){ //se não fizer isso caso não seja fornecido um valor, será considerado undefined
    console.log(a+b)
}
soma2(5) //irá considerar '5' para a e '0' para b

soma(undefined,b) //se usar undefined é usado o valor padrão, não é recomendável ficar usando esse tipo de construção

