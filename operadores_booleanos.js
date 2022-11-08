/*
> OPERADORES BOOLEANOS

Igualdade       == (ou ===)
Desigualdade    != (!==)
Maior que       >
Maior ou igual  >=
Menor que       <
Menor ou igual  <=

Por padrão o JS compara o conteúdo, não o tipo da variável (quando se usa ==).
Quando se usa === ele compara o tipo também, portanto este é o mais recomendado para evitar possíveis bugs
*/

const numero = 10;
console.log('10 é maior que 20?', numero > 20)
console.log('A constante "numero" tem valor 10?', numero == 10)
console.log('A string 10 é igual ao numero 10?', numero === '10', 'pois apesar dos valores serem iguais, os tipos não são')
console.log('Então posso dizer que os tipos são diferentes?', numero !== '10')
console.log('Mas em termos de valor, 10 é diferente de "10"?', numero != '10')

/*
CONJUNÇÕES LÓGICAS
AND     &&
OR      ||
NOT     !
*/

const idade = 28;
let cnh = false;
let dirigir = idade >=18 && cnh == true;
console.log('Rafael tem 28 anos mas não tem CNH, ele pode dirigir?', dirigir)
cnh = true;
dirigir = idade >=18 && cnh == true;
console.log('Eu tenho a mesma idade e tenho cnh, eu posso?', dirigir)
