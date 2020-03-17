let valor //variavel nao inicializada
console.log(valor)

valor = null //ausencia de valor -- nao aponta pra nenhum local de memoria
console.log(valor)
//console.log(valor.toString()) //error

const produto = {} //objeto vazio
console.log(produto.preco) // o preco nao esta definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)


