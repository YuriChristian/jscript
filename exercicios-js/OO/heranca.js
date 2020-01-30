const ferrari ={
    modelo: 'F40',
    velMax: '400'
}
const volvo ={
    modelo: 'V40',
    velMax: '200'
}
//herança = referência para o protótipo
// procurar atributo em ferrari, e se não encontrar, buscar no prototipo maior
console.log(ferrari.__proto__) 

console.log(ferrari.__proto__ === Object.prototype) 

console.log(volvo.__proto__) 
// não há prototipos acima dele
console.log(Object.prototype.__proto__) 