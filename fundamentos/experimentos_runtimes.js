let a = 3

globalThis.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

module.exports = { e: 456, f: false, g: 'teste' }
console.log(module.exports)

//criando uma variavel maluca: sem var ou let
abc = 34 //nao fazer
console.log(global.abc)