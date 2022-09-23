//Código extraído de recursos da aula do Curso de JavaScript e TypeScript do prof. Luiz Otávio e comentado no decorrer da aula.

function rand(min = 1000, max = 3000) { //função para gerar número aleatório entre 1000 e 3000
  const num = Math.random() * (max - min) + //Math.random fornece um número entre 0 e 1
    min;
  return Math.floor(num);//arredonda para número inteiro para baixo (se fosse o mais próximo e não baixo seria round)
}

/* Uma função callback é uma função passada a outra função, parece útil quando precisamos determinar uma ordem exata,
uma execução em cadeia de funções, uma chamndo a outra. Isso deixa o código mais organizado, mais claro do que fazer uma 'árvore de Natal' encademaneto confuso de muitas funções */

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback(); //verifica se há um callback, se houver o executa
  }, rand()); //determina tempo em miléssimos de segundos para a função f1 ser executada
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

f1(f1Callback); //executa f1 passando a função abaixo 'f1Callback' como argumento, na função f1 é comandado para chamar esse argumento como uma função

function f1Callback() { 
  f2(f2Callback);//põe em execução f2 tendo a função 'f2Callback' como argumento, que é executada como callback 
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}
