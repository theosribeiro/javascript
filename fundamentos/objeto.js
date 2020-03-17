const prod1 = {} //objeto na forma literal -- colecao de pares chave-valor
prod1.nome = 'Celular ultra mega' //nome foi alocado dinamicamente
prod1.preco = 4998.99
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaco

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    valor: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

prod2['Desconto Nicest'] = 0.40

console.log(prod2)
console.log(`Produto2 -- nome: ${prod2.nome}, 
            valor: ${prod2.valor}, 
            obj: ${prod2.obj.blabla}, 
            obj: ${prod2.obj.obj.blabla}`)



//JSON eh diferente de objeto
//JSON eh um formato textual de objeto (chave: valor) -- INTEROPERABILIDADE ENTRE SISTEMAS
//{"nome":"Camisa Polo", "preco": 79.90}