//variáveis são pedaços de memória que guardam informação
//let vem de "let it change"
//Variável pode ter números mas não pode começar com eles
//segunda palavra em diante deve começar com maiúscula
let idade = 26;

console.log(idade);

//Tipos de variáveis
idade = 28; //é possível alterar conteúdos
let numero = 30; //Tipo Number
let altura = 1.72; //Tipo Number
let nome = 'Taina'; //Tipo String (texto)
let estudando = true //Tipo Boolean

console.log(numero, typeof numero)
console.log(altura, typeof altura)
console.log(nome, typeof nome)
console.log(estudando, typeof estudando)

let outra;
console.log(outra)

let nula = null;
console.log(nula)

//não pe recomendado usar var, está obsoleto
var variavel = 30;

//variáveis const são imutáveis
const constante = 20;
//se tentar atribuir outro valor como abaixo vai dar erro no programa
constante = 30;