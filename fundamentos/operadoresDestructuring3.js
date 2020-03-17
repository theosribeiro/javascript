function rand({min = 0, max = 1000}){ //operador destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) //passando como parametro um objeto

console.log(rand({min:955}))
console.log(rand({}))
//console.log(rand())

function rand2({ min2 = 0, max2 = 1000 } = {}) { //operador destructuring
    const valor = Math.random() * (max2 - min2) + min2
    return Math.floor(valor)
}

console.log(rand2())