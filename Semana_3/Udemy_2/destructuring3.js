function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj1 = {min: 50, max: 40};
console.log(rand(obj1)); // Exemplo com objeto definido
console.log(rand({min: 50, max: 40})); // Exemplo com valores definidos
console.log(rand({min: 955})); // Exemplo com apenas o valor mínimo definido
console.log(rand({})); // Exemplo com objeto vazio, usa valores padrão
//console.log(rand()); // Exemplo sem passar nenhum objeto, usa valores padrão