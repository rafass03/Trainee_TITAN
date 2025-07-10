const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!" // Concatenação de strings
const template = `
    Olá 
    ${nome}!` // Template String (interpolação)
console.log(concatenacao, template)

// Espressões
console.log(`1 + 1 = ${1 + 1}`) // Interpolação de expressões

const up = texto => texto.toUpperCase() // Função para converter string para maiúsculas
console.log(`Ei... ${up('cuidado')}!`) // Interpolação com função