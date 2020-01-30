const pessoa = {
 txt: 'blablabla',
 falar(){
     console.log(this.txt)
 }
}
pessoa.falar()
const falarDeAlguem = pessoa.falar.bind(pessoa) // poder acessar o txt que esta dentro do objeto peessoa
falarDeAlguem()

function pess(){
    this.idade =0
    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    } /*.bind(this)*/, 10000)
 
    
}
new pess()