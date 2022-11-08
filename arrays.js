//ARRAYS guardam várias informações
let arr = ['Taina', 28, 1.72, true, 'Dragões']

console.log(arr)

console.log(`Valor da primeira posição do meu array: ${arr[0]}`)
console.log(`Meu arrau tem ${arr.length} elementos`)

for(let i = 0; i < arr.length; i++) {
    console.log(`Valores do array: ${arr[i]}`)
}

for(let element of arr) {
    console.log('Valores do array:', element)
}

for(let indice in arr) {
    console.log(indice,'-', arr[indice])
}

//MÉTODOS DE ARRAYS
//Fatiamento: slice - posso dizer o início e o fim da "fatia" do array que eu quero
console.log(arr.slice(1,3))
//Adicionar elementos: push | unshift
let arr2 = []
console.log('Antes do push:', arr2)
arr2.push('Skyrim', 'Coelhos')
arr2.push(30)
console.log('Depois do push:', arr2)
arr2.unshift(99)
console.log('Com unshift:', arr2)
//Remover elementos: pop | shift
arr2.pop()
console.log('Removendo com pop:', arr2)
arr2.shift()
console.log('Removendo com shift:', arr2)
//Concatenar arrays: concat
console.log('Arrays concatenados:', arr.concat(arr2))
//Buscar elementos: indexOf | lastIndexOf
console.log(arr.indexOf('Dragões'))
//se retornar -1 é porque esse index não existe no array
console.log('arr.lastIndexOf() retorna o índice do último elemento que apresenta um determinado valor')
//Descobrir se existe um elemento no array: includes
console.log('O array tem o nome Taina?', arr.includes('Taina'))
//Inverter array: reverse
console.log(arr.reverse())