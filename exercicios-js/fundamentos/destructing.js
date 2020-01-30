const pessoa = {
    nome: 'Ana',
    idade: Number('5'),
    end: {
        cep: Number('11.001'),
        numero: Number('19')
    }
}

const { nome, idade } = pessoa //'retirou' isso do objeto pessoa
const { nome: n, idade: i } = pessoa
console.log(i, n)


const { end: { cep, numero } } = pessoa
console.log(cep, numero)
console.log(pessoa)
const { nome2 = 'anaanana', idade2 } = {idade2: 10}
console.log(nome2, idade2)