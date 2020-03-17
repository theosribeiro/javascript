function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //se trabalho1 for 'v', nem analisa trabalho2, ja retorna verdadeiro
    const comprarTv50 = trabalho1 && trabalho2 //se trabalho1 for 'f', nem analisa o trabalho2, ja retorna falso
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // ^ - operador bitwase XOR - OU exclusivo, bit a bit 
    const comprarTv32 = trabalho1 != trabalho2 //simula o XOR
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32,manterSaudavel} //retorna um objeto - chave-valor de forma reduzida, colocando a chave automatico
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))