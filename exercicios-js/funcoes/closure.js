const x ='Global'
function fora(){
    const x ="babaabbababa"

    function dentro(){
        return x
    }
    return dentro
}

const fun = fora()
console.log(fun())
 
