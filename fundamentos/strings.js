const escola = "Cod3r"

console.log("o quarto elemento da String Cod3r eh: "+escola.charAt(4))
console.log("o quinto elemento da String Cod3r eh: "+escola.charAt(5))
console.log("o valor do terceiro elemento na tabela ascII eh: "+escola.charCodeAt(3))
console.log("a posicao de 'r' na String cod3r eh: "+escola.indexOf('r'))

console.log(escola.substr(1)) //imprime a partir da primeira posicao na string
console.log(escola.substr(0,3)) // vai imprimir 3 indices da String a partir do indice 0 

console.log('Concatenacao: '.concat(escola).concat("!")) //concatena tanto aspas simples quanto duplas
console.log("replace na posicao 3 da string pela letra 'e': ".concat(escola.replace(3,'e')))//replace
console.log("replace de todos os digitos na string pela a letra 'a': ".concat(escola.replace(/\d/, 'a')))//replace e uso de regex
console.log("replace na string de tudo pela a string 'i': ".concat(escola.replace(/\w/g, 'i')))//replace e uso de regex

//separar os elementos da string em 1 array
console.log('maria,joao,pedro,ana,jose'.split(','))
