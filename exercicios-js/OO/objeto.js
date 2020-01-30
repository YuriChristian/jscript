const obj = new Object
obj.nome = 'Carro'
obj.preco = 200
obj['cor'] = 'preto'
console.log(obj)
delete obj.preco
console.log(obj)

carro = {
    cor: {
        cor2: {
            cor3: 'azul'
        }
    }
}
console.log(carro.cor.cor2.cor3);
