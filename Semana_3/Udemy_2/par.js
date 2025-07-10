// par nome/valor
const saudacao = "Opa" //contexto lexical 1

function exec() {
    const saudacao = "Fala" //contexto lexical 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao) // Opa
console.log(exec()) // Fala
console.log(cliente) // { nome: 'Pedro', idade: 32, endereco: { logradouro: 'Rua Muito Legal', numero: 123 } }