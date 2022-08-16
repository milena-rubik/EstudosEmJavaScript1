function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12:false});//faz com que não seja usado o formato 12/24 mas o 24/24, como por exemplo 14h ao invés de 2h(p.m.)
}


function funcaoIntervalo(){
    console.log(mostraHora());
}
setInterval(funcaoIntervalo, 1000);//coloca a função funcaoIntervalo como referência para ser executada a cada 1000 milissegundos


//outra forma de fazer o acima sem precisar criar a função antes usando função anônima 'feita na hora' e com função de parada depois
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);}, //cria a função anônima como parâmetro fazendo link com a constante 'timer' para estabelecer a parada
     3000); //define 3000 milissegundos como parada de 'timer'


setTimeout(function(){
    console.log('Após 5 segundos vai exibir essa mensagem');
}, 5000); //condição de tempo, definindo a ação para 5 segundos (5000 milissegundos)
