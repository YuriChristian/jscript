{ 
    { 
        { var sera = 'Será' // visível fora do bloco
        console.log(sera) 
        } 
    } 
}
console.log(sera) 
function ser(){
    var sera = 'Será' // não visível fora do bloco
}

var numero = 1
{{
    var numero = 5 
    console.log(num) // 5
}}
console.log(numero) // 5

////////////////////


let num = 1
{{
    let num = 5 
    console.log(num) // 5
}}
console.log(num) // 1