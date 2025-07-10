function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            X = vetorA[i]
            Y = vetorB[i]
            vetorA[i] = Y;
            vetorB[i] = X;
        }
    } 
    else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let X, Y;
let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]
trocaValores(vetorA, vetorB)