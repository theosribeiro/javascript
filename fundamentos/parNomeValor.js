//par nome valor
const saudacao = "Opa" //contexto léxico 1

function exec(){ //contexto diferente da saudacao acima
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados da pares nome/valor
const cliente = {
    nome: "Pedro", //contexto do obj cliente
    idade: 32,
    peso: 90,
    endero: {
        logradouro: "Rua muito legal", //contexto do obj endereco
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente) //colecao de chaves e valores

