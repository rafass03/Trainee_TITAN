const prod1 = {}
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
//prod1['Desconto Legal'] = 0.40; // evitar espaços em branco

console.log(prod1);
console.log(prod1.nome);
console.log(prod1.preco);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    // obj: {
    //     blabla: 1,
    //     obj: {
    //         blabla: 2
    //     }
    // }
}

'{ "nome": "Camisa Polo", "preco": 79.90 }' // JSON (JavaScript Object Notation) - formato de dados leve e fácil de ler

console.log(prod2);