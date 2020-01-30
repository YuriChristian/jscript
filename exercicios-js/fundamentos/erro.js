function tratar(erro){
    throw 10             
}
function nomeGritado(obj) {
    try {
        console.log(obj.name.touppercase().concat('!!!'))
    } catch(e){
        tratar(e)
    } finally { console.log('até')}
}
const obj = { nome: 'Robs' }
nomeGritado(obj)