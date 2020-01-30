class Lancamentos{
    constructor(nome = 'Salario', valor = 0){
        this.nome= nome
        this.valor = valor

    }
    
}
class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos= []
    }

    addLanc(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }

}
const salario = new Lancamentos('Salario',90000)
const luz = new Lancamentos('luz',-900)

const contas = new CicloFinanceiro(6,2)
contas.addLanc(salario, luz)
console.log(contas.sumario())

