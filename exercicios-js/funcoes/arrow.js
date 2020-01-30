dobro = (a) => 2*a
console.log(dobro(28391))

function tuo( ){
    this.idade = 0

    setInterval(()=> {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new tuo() // sem bind

