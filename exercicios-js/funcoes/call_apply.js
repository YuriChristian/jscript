function preco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}
const prod = {
  //nome: 'note'
    preco: 2923,
    desc: 0.35,
  //preco
   
}
globalThis.preco = 20
globalThis.desc = 0.15

console.log(preco()) // escopo global
//console.log(prod.preco())
const carro = {preco: 69087, desc: 0.5}
console.log(preco.call(carro))
console.log(preco.apply(carro))

console.log(preco.call(prod, 0.18, '$'))
console.log(preco.apply(carro, [0.18,'$'])) // []


