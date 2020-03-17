//novo recurs do EC2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1001
    }
}

const { nome, idade } = pessoa //operador de desestruturacao

console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n,i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome,bemHumorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)
