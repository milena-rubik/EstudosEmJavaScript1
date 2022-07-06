//Quando precisar consultar: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const data = new Date() //sem parâmetrocria data de acordo com as configurações do sistema
console.log(data.toString()) //Exibe a data

const aniver = new Date(1995,10,07)//entrada com parâmetro, preciso usar 10 se quero novembro, pois a contagem começa em 0, jan=0
console.log(aniver) //exibe na forma padrão: ano,mes,dia,hora,minutos,segundos,milesegundos
console.log(aniver.getDate(),aniver.getMonth(),aniver.getFullYear())//exibe nesse caso dia,mes,ano
console.log(aniver.getDay())//obtem o dia da semana em número, 0=doming,1=segunda...

function zeroesquerda (num) { //função para fazer deixar de omitir 0 a esquerda nas datas e horas
    return num >= 10? num : `0${num}`;//se o número for >= 10 retorna o número se não retorna o número com o zero a esquerda, operação ternária
}

function formatardata(data){ //função para formatar a data
    const dia = zeroesquerda(data.getDate());
    const mes = zeroesquerda(data.getMonth()+1); //+1 para corrigir a contagem que começa em zero 
    const ano = zeroesquerda(data.getFullYear());
    const hora = zeroesquerda(data.getHours());
    const min = zeroesquerda(data.getMinutes());

    return `${dia}/${mes}/${ano} ${hora}:${min}`;
}

console.log(formatardata(data))


