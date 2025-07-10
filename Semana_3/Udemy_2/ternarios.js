//const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';
const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}

console.log(resultado(6.5)); // Reprovado
console.log(resultado(7.0)); // Aprovado