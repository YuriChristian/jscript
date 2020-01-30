const array= [1,2,3,4,5]
let notasBaixas =[]
for(let i in array){
    if(array[i] <= 3){
        notasBaixas.push(array[i])
    }
    
}
console.log(notasBaixas)

//com callback
const notaBaixa = array.filter(array =>  array <=3)
console.log(notaBaixa)