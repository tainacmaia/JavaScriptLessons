let numero1 = 20;
let numero2 = 2;

/* 
> OPERADORES ARITMÉTICOS
Adição:             +
Subtração:          -
Multiplicação:      *
Divisão:            /
Exponenciação:      **
Resto da divisão:   %
*/
const soma = numero1 + numero2;

console.log('Soma =', soma)
console.log('Subtração =', numero1 - numero2)
console.log('Multiplicação =', numero1 * numero2)
console.log('Divisão =', numero1 / numero2)
console.log('Exponenciação: =', numero1 ** numero2)
console.log('Resto da divisão =', numero1 % numero2)

//Precedência de operadores
console.log('Precedência de operadores:')
console.log('3 + 7 * 3 =',3+7*3,'é diferente de','(3 + 7) * 3 =',(3+7)*3)

//Biblioteca Math
console.log('PI:', Math.PI)
console.log('Valor absoluto de -20:', Math.abs(-20))
console.log('Raiz quadrada de 25:', Math.sqrt(25))