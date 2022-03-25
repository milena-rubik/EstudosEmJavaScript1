const cadastro = { //usamos chaves, essa sintaxe para criar um objeto
    nome: 'Dalila',
    idade: '12'
}
console.log(cadastro.nome) //acesso nome do objeto cadastro


function criarCadastro (nome, sobrenome, idade) { //cria uma função que cria objeto
    return{ nome,sobrenome,idade }
}

const matricula1 = criarCadastro('Pudim', 'Bullgen',1)
console.log(matricula1)