console.log(Math.ceil(6.1)) // aredonda para cima
const obj = {}
obj.nome= 'Bola' 
obj['preco'] = 10.00

function Obj2(nome){
    this.nome = nome
}
const novo = new Obj2('folha')
console.log(novo.nome)