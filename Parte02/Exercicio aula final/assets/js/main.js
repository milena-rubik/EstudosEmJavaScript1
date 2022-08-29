const inputTarefa = document.querySelector('.input-tarefa'); //cria a constante inputTarefa e a vincula com a classe .input-tarefa do html  
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e) { //crio observador de eventos para teclas pressionadas no campo inputTarefas
  if (e.keyCode === 13) { //13 é o código da tecla enter, se for verdadeiro executa o bloco abaixo
    if (!inputTarefa.value) return; //sai da função se o campo de imput for vazio e enter for pressionado (impede a criação de itens aleatórios)
    criaTarefa(inputTarefa.value); //chama a função criaTarefa com o valor do inputTarefa como parâmetro
  }
});

function limpaInput() {
  inputTarefa.value = ''; //limpa o input deixa o campo vazio
  inputTarefa.focus(); //serve para focar o cursor no campo 
}

function criaBotaoApagar(li) {
  li.innerText += ' '; //acrescenta um espaço abaixo de li para deixar o botão abaixo separado
  const botaoApagar = document.createElement('button'); //cria um botão referenciado por botaoApagar
  botaoApagar.innerText = 'Apagar'; //determina o que está escrito no botão
  botaoApagar.setAttribute('class', 'apagar'); //insiro um atributo para o botão, nocaso uma classe chamada apagar
  botaoApagar.setAttribute('title', 'Apagar esta tarefa'); //dou o título, ao passar o mouse no botão aparece 'apagar essa tarefa'
  li.appendChild(botaoApagar); //acrescenta o botão ao elemento li
}

function criaTarefa(textoInput) {
  const li = criaLi(); //chama a função criaLi a qual foi criada para criar elementos referenciados por li
  li.innerText = textoInput; //coloca o texto parâmetro no elemento li criado pela função criaLi
  tarefas.appendChild(li); //acrescenta na constante tarefas (ver linha 3) o elemento li
  limpaInput(); //chama a função de limpar o imput
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function() { //captura o evento de clicar e executa a função quando isso ocorre
  if (!inputTarefa.value) return; //sai da função se o campo de imput for vazio e botão for pressionado (impede a criação de itens aleatórios)
  criaTarefa(inputTarefa.value); //aciona a função criarTarefa tendo como parâmetro o valor posto no campo input tarefa
});

document.addEventListener('click', function(e) {//crio observador de eventos para clics
  const el = e.target; //e.target captura o elemento onde ocorrer o evento 'click' e atribui a const el

  if (el.classList.contains('apagar')) { //se el contiver a classe apagar executa o bloco abaixo
    el.parentElement.remove(); //seleciona o elemento 'pai' e o remove, no caso o elemento li atrelado ao botão, por o botão ser 'filho' ao remover o 'pai' o removemos também 
    salvarTarefas(); //chama a função salvarTarefas, chamo para atualizar a lista salva (inclusive em JSON já que está dentro dessa função) se apago uma tarefa
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li'); //seleciona todos os elementos referenciados por li e atribui a liTarefas
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) { //para cada elemento de liTarefa:
    let tarefaTexto = tarefa.innerText; //atribui o conteúdo a variável tarefaTexto, porém o além do digitado vem a palavra 'apagar' junto devido ao botão 
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //faço isso para apagar a palavra 'apagar', o '.trim' serve para remover o espaço nas extremidades do texto
    listaDeTarefas.push(tarefaTexto);//adiciona o conteúdo de tarefaTexto no array listaDeTarefas
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); //JSON.stringifly converte para string no formato Json
  localStorage.setItem('tarefas', tarefasJSON); //localStorage salva no navegador é uma 'mini base de dados', tarefas é o nome que dou / uso para recuperar depois e tarefasJSON o que estou salvando
}

function adicionaTarefasSalvas() { //função para resgatar as tarefas salvas no navegador 
  const tarefas = localStorage.getItem('tarefas'); //obtem o que foi salvo nomeado por 'tarefas' no navegador e atribui a const tarefas
  const listaDeTarefas = JSON.parse(tarefas); //converte de volta tarefas de string JSON para um objeto javascript, no caso um array

  for(let tarefa of listaDeTarefas) { //função para aplicar a função criaTarefas para as tarefas que estavam salvas no browser em Json 
    criaTarefa(tarefa); 
  }
}
adicionaTarefasSalvas(); //chama a função para resgatar tarefas salvas no browser
