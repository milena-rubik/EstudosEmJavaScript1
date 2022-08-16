try {
    //Executa quando não dá erros
} catch (e){
    //Executa quando há erro
} finally{
    //Executa sempre
}


//O jeito do try e catch lembra if e else
try{ //vai tentar executar o bloco abaixo
    console.log(coisaindefinida);
} catch(erro){ //caso não execute o Try é redirecionado para o Catch, o erro em si é salvo em 'erro'
    console.log('Coisaindefinida não existe!')
    console.log(erro) //exibe o erro, CUIDADO COM ISSO EM PROGRAMAS NA VIDA REAL não exiba qql erro pode expor coisas do programa e seria falha de segurança
}

function soma(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números!') //exibiria apenas isso ao chamar o erro por 'catch(error)'
        //se quisesse não substituir, mas ter a minha mensagem mais a descrição erro do javascript deveria ter feito: throw new TypeError('x e y...')
    }
}

