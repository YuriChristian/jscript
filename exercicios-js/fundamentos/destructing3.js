function rand({ min = 0, max = 100 }) { // o parametro serve como destructing, 
                                       //pois retira isso do objeto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {ma:50, mn:40}
console.log(rand(obj))
console.log(rand({min: 0, max: 100 }))
console.log(rand({}))