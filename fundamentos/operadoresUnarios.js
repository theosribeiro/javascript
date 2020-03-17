let num1 = 1
let num2 = 2

num1++ //pos fixado
console.log("num1++: ",num1)
--num1 //pre fixado
console.log("--num1: ",num1)

console.log(++num1 === num2++) //num1 vai ser incrementado antes da comparacao e num2 so vai ser decrementado depois da comparacao 
console.log(num1 === num2)