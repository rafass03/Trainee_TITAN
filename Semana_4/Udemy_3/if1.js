function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    } 
    else {
        console.log('Reprovado com ' + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.7);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeEuFalo(true);
seForVerdadeEuFalo(false);
seForVerdadeEuFalo(0); //false
seForVerdadeEuFalo(1);
seForVerdadeEuFalo(''); //false
seForVerdadeEuFalo('Olá');
seForVerdadeEuFalo(null); //false
seForVerdadeEuFalo(undefined); //false
seForVerdadeEuFalo(NaN); //false
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo({});
