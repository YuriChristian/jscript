function area(altura,largura){
   let area2 = altura*largura
    if(area2>20){
 console.log(`Não permitido : muito grande ${area2} > 20m^2`)
    }else{
        return area2
    }
}
console.log(area(6,3))