//OBJETIVO: CRIAR UMA PÁGINA QUE EXIBA A DATA NA ORDEM: DIA DA SEMANA, X DE MES DE XXXX 00:00.



function zeroaesquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function diasem(diaSemana){
    switch(diaSemana){ //função para transformar o número do dia da semana que o objeto Date fornece em texto
        case 0: diaSemana = 'Domingo';
        break; 
        case 1: diaSemana = 'Segunda';
        break;
        case 2: diaSemana = 'Terça';
        break;
        case 3: diaSemana = 'Quarta';
        break;
        case 4: diaSemana = 'Quinta';
        break;
        case 5: diaSemana = 'Sexta';
        break;
        case 6: diaSemana = 'Sábado';
        break;
        default: diaSemana = 'Erro'
        break;
    }
    return diaSemana;
}

function datahoje() {
    let hoje = new Date();
    const semana = diasem(hoje.getDay()); //chama a função diasem tendo como argumento o valor do dia da semana
    const dia = zeroaesquerda(hoje.getDate()); //chama a função zeroaesquerda tendo como argumento o valor do dia da data
    const mes = zeroaesquerda(hoje.getMonth() + 1); //+1 para corrigir a contagem que começa em zero 
    const ano = zeroaesquerda(hoje.getFullYear());
    const hora = zeroaesquerda(hoje.getHours());
    const min = zeroaesquerda(hoje.getMinutes());

    const data = document.querySelector(".container");
    data.innerHTML = `<p>${semana} ${dia}/${mes}/${ano} ${hora}:${min}</p>`;

}

datahoje()




