const peso1 = 60
const peso2 = Number('80.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const e = 2
const f = 3

const total = e+f
console.log(total.toFixed(2)) // duas casas decimais
console.log(total.toString()) //converter para string
console.log(total.toString(2))//converter para binário
console.log(typeof total)