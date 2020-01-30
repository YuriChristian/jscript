function pessoa(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`);
        
    }
}

const eu = new pessoa('Yuri')
eu.falar()