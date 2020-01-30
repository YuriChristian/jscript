const pessoa = {
    nome: 'kfsdcdl',
    idade: 183,
    peso: 60

}
console.log(Object.entries(pessoa)) // lista chave-valor
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}, ${valor}`)

})
Object.defineProperty(pessoa, 'idade2',{ // definir caracteristicas de uma propriedade de um objeto (obj, propriedade,caractristicas)
    enumerable: true, //pode ser listada no entries
    writable: false, // não pode ser modificada
    value: 32 // valor dela

}) 
console.log(pessoa.idade2)

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest,o1,o2) // pega os atributos de o1 e o2 e coloca em dest
console.log(obj)
Object.freeze(obj) // o obj não poderá mais ser alterado



