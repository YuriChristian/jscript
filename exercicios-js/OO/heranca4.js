function meuObjeto() {}



const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__=== obj2.__proto__)
console.log(meuObjeto.prototype=== obj1.__proto__)

meuObjeto.prototype.nome = 'Anonimo'
meuObjeto.prototype.falar = function(){
    console.log(
        `Bom dia, meu nome é ${this.nome}`
    )
    
}
obj1.falar()
obj1.nome = 'radknlkasby'
obj1.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'jsnvklsb'
obj3.falar()

console.log(meuObjeto.prototype)
console.log(obj2.__proto__)