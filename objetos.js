//OBJETOS
//chave e valor

let pessoa = {
    nome: 'Taina',
    sobrenome: 'Maia',
    //se tiver traço o js pede aspas
    'cidade-natal': 'São Luís',
    'cidade-atual': 'São José dos Campos'
}
console.log(pessoa)
console.log('Meu nome é', pessoa.nome)
console.log('Meu sobrenome é', pessoa['sobrenome'])
//se tiver traço é obrigatório usar colchete
console.log('Sou de', pessoa['cidade-natal'])
//se a chave não existir e se atribuir um valor, será adicionada
pessoa.altura = 1.72
console.log(pessoa)
//se existir, será alterada
pessoa.sobrenome = 'Costa'
console.log('Meu outro sobrenome é', pessoa.sobrenome)
//removendo uma chave
delete pessoa.altura
console.log(pessoa)
//Percorrendo um objeto
console.log('Chaves e valores do meu objeto:')
for(let chave in pessoa) {
    console.log(chave, '-', pessoa[chave])
}