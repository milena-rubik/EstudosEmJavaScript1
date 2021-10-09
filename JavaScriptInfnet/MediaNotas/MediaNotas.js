//Faça um programa que peça as 4 notas bimestrais e mostre a média.

let total = 0
let numeronotas = 4
let notas = [] //crio um vetor para receber as notas
for (i=1; i <= numeronotas; i++) { //(inicio o contador em algum número, declaro a condição de execução do bloco, incremento o contador)
    let nota = window.prompt(`Insira a nota ${i}`) //pede em uma janela o dado ao usuário
    notas.push(nota) //insere a nota fornecida no vetor
    total += parseFloat(nota) //transforma a nota em flutuante e agrega na variável total
    }

 document.body.innerHTML = (`A média entre as 4 notas é ${total/numeronotas}`) //Imprime mensagem no corpo do html
