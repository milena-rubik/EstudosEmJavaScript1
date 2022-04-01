/*
Operadores de comparação
>= maior ou igual 
<= menor ou igual
== igualdade de valor - não recomendado porque vê apenas o valor da variável, então se eu tiver '10' string ou 10 number vai dizer que é igual / true.
=== igualdade de valor e tipo
!= diferente de valor - não recomendado porque vÊ apenas o valor, então '10' string e 10 number apresentará que não é diferente, ou seja, false.
!== diferente estrito - valor e tipo
*/

const maiorigual = 10>=11
console.log(maiorigual) // retorna false

/*
Operadores Lógicos
&& -> and
|| -> or
! -> not
*/

//USO INTERESSANTE DO OU:
const corPadrao = corUsuario || 'preto'; //ao invés de precisar fazer uma estrutura toda de repetição isso ou aquilo, como o OU para no primeiro valor 
//considerado verdadeiro/valido e retorna esse valor, se o usuário não tivesse escolhido uma cor, ficando nulo o corUsuario, retornaria 'preto'
console.log(corPadrao)

