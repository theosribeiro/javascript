const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + "!"
const template = `
    Olá
           ${nome}!`  //interpolacao
console.log(concatenacao, template)

//expressoes
console.log(`1 + 1 = ${1+1}`)

const upCase = texto => texto.toUpperCase()
console.log(`Ei... ${upCase('cuidado')}!`)
