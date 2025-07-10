function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    if (nota1 >= nota2 && nota1 >= nota3) {
        let mediaFinal = (nota1 * 4 + nota2 * 3 + nota3 * 3)/10
        console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Média Ponderada: ${mediaFinal} ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
    }
    else if (nota2 >= nota1 && nota2 >= nota3) {
        let mediaFinal = (nota2 * 4 + nota1 * 3 + nota3 * 3)/10
        console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Média Ponderada: ${mediaFinal} ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
    }
    else {
        let mediaFinal = (nota3 * 4 + nota1 * 3 + nota2 * 3)/10
        console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Média Ponderada: ${mediaFinal} ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
    }
}

calcularNotaFinal(123, 2.8, 6, 3.5)
calcularNotaFinal(600, 6, 6, 5)