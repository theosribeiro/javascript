const peso1 = 1.1
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total/(peso1 + peso2)

console.log("MEDIA: "+media.toFixed(2)) //2 casas decimais
console.log("Valor em String e binario: "+media.toString(2)) //binario
console.log("tipo media: "+typeof media)
console.log("tipo Number: " + typeof Number)


