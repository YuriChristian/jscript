 const fabricantes = ['a', 'b','c']
 function imprimir(b,a){
     console.log(`${a+1}. ${b}`);
     
 }
 fabricantes.forEach(imprimir)
 fabricantes.forEach(fabricantes => console.log(fabricantes))
 fabricantes.forEach((b,a) => console.log(`${a+1}. ${b}`))

