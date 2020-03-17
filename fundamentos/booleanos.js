let isAtivo = false
console.log(`isAtivo = ${isAtivo}`)

isAtivo = true
console.log(`isAtivo = ${isAtivo}`)

console.log(!!true) //retorna true
console.log(!false) //retorna true
console.log(!!false) //retorna false
console.log(!true) //retorna false

isAtivo = 1
console.log(`isAtivo = ${!!isAtivo}`) //usa 2 negacoes para nao inverter a logica e mostrar true ou false

console.log("\nOs verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = []))

console.log('\nOs falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('\nPara Finalizar...')
console.log(!!('' || null || 0 || ' ' ))

let nome = ''
console.log(nome || 'Desconhecido!')

let nome1 = 'Theo'
console.log(nome1 || 'Desconhecido!')

