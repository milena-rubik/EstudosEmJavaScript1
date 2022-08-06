//Várias coisas dão problema de undifined no VS code mas executa no browsoer


const paragrafos = document.querySelector('.paragrafos'); //acabaria selecionando apenas o primeiro parágrafo se não feito o selectall abaixo

const ps = paragrafos.querySelectorAll('p');//cria algo semelhante a array com os parágrafos, a lista

const estilosBody = getComputedStyle(document.body) //para conseguir capturar estilos já definidos do body
const corBody = estilosBody.backgroundColor

for(let p of ps){
    p.style.color = corBody //muda a cor de cada parágrafo para a cor que capturei do Body
    p.style.fontWeight = 900 //Muda a 'grossura' das letras de cada parágrafo
}
