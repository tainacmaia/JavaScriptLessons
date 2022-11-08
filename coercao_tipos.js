//COERÇÃO (CONVERSÃO) DE TIPOS

// 1 - COERÇÃO EXPLÍCITA
const numero = 32

console.log('A constante', numero, 'é do tipo', typeof(numero))
console.log('mas eu posso convertê-la explicitamente em', typeof(String(numero)))
console.log(`O mesmo pode ser feito com uma ${typeof('10')}, que pode ser convertida em ${typeof(Number('10'))}`)

//Outras conversões: parseInt, parseFloat, Boolean

// 2- COERÇÃO IMPLÍCITA

console.log(`O JS converte tudo pra texto. Por exemplo, a soma do número 10 com a string '1' resulta em ${10+'1'}, pois ele faz uma concatenação e converte implicitamente o 10 para string`)
console.log(`No caso de subtração, multiplicação e divisão o JS calcula corretamente (10-'1' = ${10-'1'}), pois ele converte implicitamente a string para número e calcula.`)
console.log(`Já cálculos matemáticos com strings que tenham letras retornam ${1 - 'asasas'}`)