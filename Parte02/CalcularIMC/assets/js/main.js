function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    form.addEventListener('submit', calculoIMC);

    function calculoIMC(evento) {
        evento.preventDefault()

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const imc = peso / (altura ** 2);

        resultado.innerHTML += `<p>${imc}</p>`;
    }




}

escopo()

