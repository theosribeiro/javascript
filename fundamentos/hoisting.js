console.log('a = ',a) //a existe mas nao foi definida
var a = 2 // a declaracao da variavel 'a' vai ser movida para o topo, sem receber nenhum valor 
console.log('a = ', a)

function teste(){
    console.log('b = ',b)
    var b = 3
    console.log('b = ',b)
}

teste()
//console.log('b = ',b) //error, so existe icamento da variavel fora da funcao

//console.log('c = ',c) //nao existe icamento com LET, nao eh movida para o topo
let c = 2
console.log('c = ', c)