const numeros = [1,2,3,4]

console.log(numeros)

//CONTINUE
for (let numero of numeros){
    if (numero === 2){
        console.log('pulamos o número 2')
        continue; //pula a ação abaixo quando for True e continua testando para os próximos itens, a saída será 1,3,4 nesse caso
    }
    console.log(numero)
}

//BREAK
for (let numero of numeros){
    if (numero === 2){
        console.log('veja como break interrompe o processo')
        break; 
    }
    console.log(numero)
}