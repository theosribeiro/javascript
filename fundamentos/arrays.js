const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(`Tamanho do ARRAY: ${valores.length}`)

valores.push({id: 3}, false, null, 'teste') //passando um objeto
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(`array de valores: ${valores}`)
console.log(`Tipo do array: ${typeof valores}`)