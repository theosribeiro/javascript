//operador ternario
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //primeira parte eh a expressao que vai ser verdadeira ou falsa,
//a segunda parte eh se a expressao for verdadeira, retorna aprovado
//se for falso, retorna reprovado


console.log(resultado(7.1))
console.log(resultado(6.9))

//pode ser assim tambem
const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado2(5,3))
