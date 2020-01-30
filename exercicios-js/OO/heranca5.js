console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
 const oi =[0,0,9,8,8]
 
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Yuri'.reverse())

Array.prototype.first = function(){
    return this[0]
}
console.log([1,2,3,4,5].first())

