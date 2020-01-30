const val ={
    _valor:1, // o _ é uma convenção para não ser acessada fora do objeto
    get valor(){return this._valor++ },
    set valor(valor){if(valor> this._valor){
        this._valor =valor
    }}
}
console.log(val.valor,val.valor)
val.valor = 1000
console.log(val.valor,val.valor)
val.valor = 900
console.log(val.valor,val.valor)