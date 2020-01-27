const valores = [7.7, 8.9, 7, 5]
console.log(valores[0], valores[3])
console.log(valores[4])// indefinido
console.log(valores)
valores[10] = 9
console.log(valores) 
valores.push({id:3}, null, false, 'teste', true)// adicionando valores ao fim do array
console.log(valores)
console.log(valores.pop()) // retira o ultimo valor do array
delete valores[0]
valores.pop()
console.log(valores)
console.log(typeof valores) // objeto