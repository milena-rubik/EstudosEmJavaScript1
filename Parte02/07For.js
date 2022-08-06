
const doce = ['brigadeiro', 'cajuzinho', 'beijinho'];
const bolo = {
    recheio: 'dois-amores',
    peso: 1,
    decoracao: 'fazendinha'
};

//FOR 
for (let i = 0; i < doce.length; i++){ //percorre todo o array 'doce': inicialização, condição de execução, incremento a cada volta
    console.log(doce[i]);
}

//FOR IN
for (let i in doce){  //também percorre o vetor, detalhe que posso dar qualquer nome no lugar de i, exemplo 'let doces in doce'
    console.log(doce[i]);
}

for (let escolha in bolo) {
    console.log(escolha, bolo[escolha]); //exibe cada item do objeto, ex.: 'recheio dois amores'
}

//FOR OF
for (let valor of doce){ //já percorre o array capturando o valor sem precisar mencionar o índice.
    console.log(valor);  
}
