// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // NaN
imprimirSoma(2, 10, 4, 5, 6); // Soma apenas os dois primeiros valores
imprimirSoma(); // NaN

// função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2)); // b assume o valor padrão 0
console.log(soma()); // NaN, pois a e b não foram definidos