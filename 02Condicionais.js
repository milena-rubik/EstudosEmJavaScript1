const hora = 10

if (hora <= 12){ //executa o comando delimitado pelas chaves se hora for menor ou igual a 12.
    console.log('Bom dia');
}
else if (hora>=19){ //pode ter vários 'else if' na condição se necessário
    console.log('boa noite');
}
else {
    console.log('boa tarde');
}