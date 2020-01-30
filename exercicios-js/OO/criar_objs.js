const obj1 = {}
console.log(obj1)

console.log(typeof Object, typeof new Object)

const obj2 = {}
console.log(obj2)




////////////////////
function prd(nome, preco, desc) {
    this.nome = nome
    this.getDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new prd('jf', 2231, 0.5)
const p2 = new prd('dgdsg', 1331, 0.5)
console.log(p1.getDesconto(), p2.getDesconto());

//////////////////////

function criarFun(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFun('Joao', 20000, 20)
const f2 = criarFun('Jo', 12000, 0)
console.log(f1.getSalario(), f2.getSalario());

//////////////////

const fil = Object.create(null)
fil.nome = 'NNNN'
console.log(fil)

///////////////////

const json = JSON.parse('{"info": "adddc"}')
console.log(json)
