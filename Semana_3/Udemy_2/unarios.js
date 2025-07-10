let num1 = 1
let num2 = 2

num1++ // Incrementa num1 em 1, num1 agora é 2
console.log("01)", num1) // 2
num1-- // Decrementa num1 em 1, num1 agora é 1
console.log("02)", num1) // 1

// --num1 ou ++num1 tem prioridade sobre num1-- ou num1++
console.log("03)", ++num1 === num2--)
console.log("04)", num1 === num2)
// Não colocar incremento dentro de uma comparação, pois pode gerar confusão
