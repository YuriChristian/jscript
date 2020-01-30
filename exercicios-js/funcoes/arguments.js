function soma(){
    let soma=0
    for(i in arguments){
        soma+= arguments[i]

    }
    console.log(soma)
}
soma(1,3,4,1,4,2)

 function soma2(a=1,b=2,c=3){
  
     return a+b+c
 }
 console.log(soma2(1,4,9))
 let txt = 'teste'
 console.log(txt.length)
 