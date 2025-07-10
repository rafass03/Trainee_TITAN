let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Converte o valor para booleano, onde 1 é considerado verdadeiro

console.log('Os verdadeiros...')
console.log(!!(3))
console.log(!!(-1))
console.log(!!(' '))
console.log(!!('Teste'))
console.log(!!([]))
console.log(!!({}))
console.log(!!(Infinity))
console.log(!!(isAtivo = true)) // Atribuição de valor verdadeiro a

console.log('Os falsos...')
console.log(!!(0)) // 0 é considerado falso
console.log(!!('')) // String vazia é considerada falsa
console.log(!!(null)) // null é considerado falso
console.log(!!(NaN)) // NaN é considerado falso
console.log(!!(undefined)) // undefined é considerado falso
console.log(!!(isAtivo = false)) // Atribuição de valor falso

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) // Verifica se algum valor é verdadeiro

//let nome = ''
let nome = "Lucas"
console.log(nome || 'Desconhecido') // Se nome for falso, retorna 'Desconhecido'