// cadeia de prototipos
const avo = {atr1: 'A'}
const pai = {__proto__:avo, atr2: 'B'}
const filho = {__proto__:pai, atr3: 'C'} // agora o filho possui atr1 , atr2 e atr3
console.log(filho.atr1, filho.atr2, filho.atr3) 

const carro ={
    vellAtual: 0,
    velMax:200,

    acelerarMais(delta){
        if(this.vellAtual + delta<= this.velMax){
            this.vellAtual += delta
        }else{
            this.vellAtual = this.velMax
        }
    },
    status(){
        return `${this.vellAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari ={
    modelo: 'F40',
    velMax: '400'
}
const volvo ={
    modelo: 'V40',
    
    status(){
        return `${this.modelo}: ${super.status()}` // o super vai chamar a função do prototipo
    }
}
Object.setPrototypeOf(ferrari,carro) // tornar ferrari um prototipo de carro
Object.setPrototypeOf(volvo,carro)
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())


