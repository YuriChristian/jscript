// Evitando modificações
////////////////////////////////////////
// não colocar mais atributos
const produto = Object.preventExtensions({
    nome:'qlqr', preco: 100, tag: 'promotion'
})
console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'dfsdf'
produto.descricao = 'sdkkfjskdvkldkv'
delete produto.tag
console.log(produto)

// apenas altera, mas não exclui e nem adiciona
const pess = {nome:'sk', idade: 542}
Object.seal(pess)
console.log('Selado: ', Object.isSealed(pess))


// Object.freeze(obj) : congela toalmente

