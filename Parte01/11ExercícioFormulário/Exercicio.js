/* Criar um formulário que tenha nome, sobrenome, peso, altura e armazene num array */

function escopo () {
    const form = document.querySelector('.form'); //seleciona a classe 'form' do html, sempre ponto alguma coisa para selecionar classe, se fosse id seria por '#'.
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault(); //previne o evento de seguir em sua forma natural, no caso o submeter / enviar do formulário

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');    
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    
    }

  form.addEventListener('submit', recebeEventoForm); //adiciona o 'observador' de eventos, nos parenteses diz qual é o evento a observar

}

escopo();