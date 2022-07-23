const meuobjeto = {
    cor: 'azul',
    material: 'madeira',
    dimensao: { //objeto dentro do objeto
        largura: 6,
        altura: 3,
        profundidade: 2,

    }
};

const { cor } = meuobjeto //cria a variavel cor e atribui o valor de 'cor' do 'meuobjeto', no caso 'azul'.
console.log(cor)

const {material = 'não cadastrado', preco = 'não cadastrado'} = meuobjeto //preferencialmente vai capturar o valor do objeto, mas posso deixar um valor padrão de atribuição caso não exista a opção dentro do objeto
console.log(material)
console.log(preco)

const {cor: corum} = meuobjeto //crio a variavel corum tendo como valor cor de meuobjeto
console.log(corum)

const {dimensao:{largura,altura}} = meuobjeto //cria variavel largura e altura e atribui o valor de largura e altura do objeto dimensao do objeto meuobjeto
console.log(largura)
console.log(altura)