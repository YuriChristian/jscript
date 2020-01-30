function um() { }

const dois = function () { }

const array = [
    function (a, b) {
        return a + b
    }, um, dois 
]
console.log(array[0](2,3))
const obj = {}
obj.nome = function(){return 'falar'}
console.log(obj.nome())
function run(fun){
    if(typeof fun == 'function')
    fun()
    else 
     return 00110101
}
 run(function(){console.log( 'olá')})
  
 function soma(a,b){
    return function (c){
         console.log(a+b+c) 
     }
 }
soma(1,2)(7)
const b = soma(9,9)
b(7) // = 9+9+7