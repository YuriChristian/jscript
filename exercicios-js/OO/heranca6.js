function aula(nome,videoID){
    this.nome = nome,
    this.videoID = videoID
}
const aula1 =new aula('olá', 32123)
const aula2 =new aula('oldsf', 11111)

console.log(aula1, aula2)

////////////////////////////////// simulando o new
function novo(f,...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(aula, 'whd',93,4878,36489)
const aula4 = novo(aula, 'fhyjy',6973,644878,44444436489)
console.log(aula3, aula4)
