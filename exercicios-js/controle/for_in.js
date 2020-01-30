const array = [1, 2, 3, 4, 5, 6]
for (let i in array) {
    console.log(array[i])
}
const pess = {
    nome: 'jddfj',
    idade: 191919
}
for (let atrib in pess) {
    console.log(`${atrib}= ${pess[atrib]}`)
}
externo: 
for (atrib in pess) {
    for (i in array) {
        if (atrib == 2 && i == 3) { 
            break externo }
        console.log(i)
    }
}