const peso1 = 1.0
const peso2 = Number('2.0') // Converte a string '2.0' para o número 2.0

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Verifica se peso1 é um número inteiro
console.log(Number.isInteger(peso2)) // Verifica se peso2 é um número inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Exibe a média com duas casas decimais
console.log(media.toString()) // Converte a média para string
console.log(media.toString(2)) // Converte a média para string em binário
console.log(typeof media) // Exibe o tipo da variável media
console.log(typeof Number) // Exibe o tipo da função Number