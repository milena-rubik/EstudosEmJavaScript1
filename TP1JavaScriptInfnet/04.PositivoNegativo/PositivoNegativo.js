let numero = Number(window.prompt('Informe um número'))

if (numero>0) document.body.innerHTML = `O número informado é positivo`
else if (numero<0) document.body.innerHTML = `O número informado é negativo`
else document.body.innerHTML = `O número informado é neutro (0)`

