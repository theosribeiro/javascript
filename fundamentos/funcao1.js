//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(`A soma eh: ${a + b}`)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(9,1,4,5,6,7,8)

//Funcao com Retorno
function soma(a,b=1){
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) //NaN

function soma2(a = 0, b = 1) {
    return a + b
}
console.log(soma2()) // 1