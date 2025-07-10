function rand ({min = 0, max = 1000} = {}) {
    if (min > max) [min, max] = [max, min]; // Garante que min é menor que max
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50,40])); // Exemplo com array definido
console.log(rand([992]))
console.log(rand([, 10])); // Exemplo com array com valor mínimo definido
console.log(rand([])); // Exemplo com array vazio, usa valores padrão
// console.log(rand()); // Exemplo sem passar nenhum array, usa valores padrão