//Escreva uma função que receba 2 números e retorne o maior deles

function maior(num1,num2){
    return num1>num2? num1 : num2;
}

console.log(maior(4,9))

//Solução mais compacta do professor:
const max2 = (x,y) => x>y? x:y;

//teste solução professor:
console.log(max2(10,20));


