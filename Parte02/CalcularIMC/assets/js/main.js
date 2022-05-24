function escopo() {
    const form = document.querySelector('.form'); //seleciona a classe form do meu formulário e atribui a variável form
    const resultado = document.querySelector('.resultado');

    form.addEventListener('submit', calculoIMC); //Escuto um evento, nesse caso o envio do formulário 'submit' e comando executar a função calculoIMC que tem como parâmetro um evento

    function calculoIMC(evento) {
        evento.preventDefault() //comando a prevenção do evento parâmetro (no caso da chamada dessa função no meu programa, sem isso os valores digitados pelo usuário iriam para o além e não conseguiria manipulá-los após seleção de submit)

        const peso = form.querySelector('#peso').value; //seleciona o id peso do meu formulário lá do html e atribui a variável peso
        const altura = form.querySelector('#altura').value;

        const imc = peso / (altura ** 2); //calcula o IMC

        if (imc <= 18.5) {resultado.innerHTML += `<p>IMC ${imc.toFixed(2)}, você está abaixo do peso! </p>`}
        else if (imc <= 24.9) {resultado.innerHTML += `<p>IMC ${imc.toFixed(2)}, você está com o peso normal! </p>`}
        else if (imc <= 29.9) {resultado.innerHTML += `<p>IMC ${imc.toFixed(2)}, você está com sobrepeso! </p>`}
        else if (imc <= 34.9) {resultado.innerHTML += `<p>IMC ${imc.toFixed(2)}, você está com obesidade grau 1! </p>`}
        else if (imc <= 39.9) {resultado.innerHTML += `<p>IMC ${imc.toFixed(2)}, você está com obesidade grau 2! </p>`}
        else {resultado.innerHTML += `<p>IMC ${imc.toFixed(2)}, você está com obesidade grau 3! </p>`}
          

        
    }




}

escopo()

