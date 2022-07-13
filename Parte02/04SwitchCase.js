const data = new Date();
let diaSemana = data.getDay(); //obtem o n° do dia na semana, 0=dom, 1=seg...

switch(diaSemana){ //insiro a variável que desejo comparar os valores
    case 0: diaSemana = 'Domingo';
    break; //se não inserir o break o restante continua sendo executado, outra opção é utilizar o return em cada case
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

console.log('Sorria hoje é', diaSemana)