// > ESTRUTURAS CONDICIONAIS

const idade = 28;
 if (idade >= 18) {
    console.log(`Você tem ${idade} anos. Você é maior de idade.`)
 } else {
    console.log(`Você tem ${idade} anos. Você é menor de idade.`)
 }
 //tem também o else if igual no c#

 //LAÇOS CONDICIONAIS
let ano = 2022;
 while(ano <2025){
    console.log(`Ano: ${ano}.`)
    ano= ano + 1
 }

 const input = require('readline-sync')
 const numeroSorteado = 5;
 let numero = Number(input.question('Digite um numero:'));
 while(numero !== numeroSorteado){
    console.log(`Você escolheu o número ${numero} e errou`)
    numero = Number(input.question('Digite um numero:'))
    //o question não aceita acentos
 }
 console.log('Você acertou')

 //LAÇO NUMÉRICO: FOR

 for (let i = 0; i < 5; i++) {
    console.log('Repetindo:', i+1)
 }