function carro(velocidade = 100, delta = 5) {

    let velocidadeAtual = 0
    this.vel = function () {
        if (velocidadeAtual + delta <= velocidade) {
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidade
        }
    }
    this.acel = function () {
        return velocidadeAtual
    }
}
const car = new carro()
car.vel()
console.log(car.acel())

const ferr = new carro(350,30)
ferr.vel()
ferr.vel()
ferr.vel()
ferr.vel()
console.log(ferr.acel())

