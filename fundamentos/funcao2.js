//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a,b){ //fucao anonima pois nao tem nome
    console.log(a+b)
}

imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a+b
}

console.log(soma(3,4))

//Retorno Implicito - arrow function -> mais reduzido
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

const imprimir = a => console.log(a)
imprimir('Legal!!')