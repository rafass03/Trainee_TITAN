function compras (trabalho1, trabalho2){
    const comprarSorvete =  trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise XOR
    const comprarTV32 = trabalho1 != trabalho2 // XOR lógico
    const manterSaudavel = !comprarSorvete // operador unário
    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}

console.log(compras(true, true)) // { comprarSorvete: true, comprarTV50: true, comprarTV32: false, manterSaudavel: false }
console.log(compras(true, false)) // { comprarSorvete: true, comprarTV50: true, comprarTV32: true, manterSaudavel: false }
console.log(compras(false, true)) // { comprarSorvete: true, comprarTV50
console.log(compras(false, false)) // { comprarSorvete: false, comprarTV50: false, comprarTV32: false, manterSaudavel: true }