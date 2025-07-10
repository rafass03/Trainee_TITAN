const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // undefined, pois não existe o índice 4

valores[4] = 10; // Adiciona o valor 10 no índice 4
//valores[10] = 12; // Adiciona o valor 12 no índice 10, mas os índices intermediários não são preenchidos
console.log(valores);
console.log(valores.length); // Exibe o tamanho do array
valores.push({ id: 3 }, false, null, 'teste'); // Adiciona vários valores ao final do array
console.log(valores);

valores.pop(); // Remove o último elemento do array
console.log(valores);

delete valores[0]; // Remove o elemento no índice 0
console.log(valores);

console.log(typeof valores); // Exibe o tipo do array, que é 'object'