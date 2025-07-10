let valor // não inicializado
console.log(valor); // undefined
//console.log(valor2); // ReferenceError: valor2 is not defined
valor = null // ausência de valor
console.log(valor); // null, ausência de valor
// Não é bom usar undefined deixa o JS (a linguagem) decidir, use null
// console.log(valor.toString()); // TypeError: Cannot read properties of null (reading 'toString')
const produto = {}
console.log(produto.preco); // undefined, propriedade não definida
console.log(produto)

produto.preco = 3.50
console.log(produto); // 3.50, agora a propriedade foi definida

produto.preco = undefined 
console.log(!!produto.preco); // false, undefined é falsy
// Delete produto.preco
console.log(produto); // { preco: undefined }

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto); // { preco: null }