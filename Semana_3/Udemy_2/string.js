const escolar = "Cod3r"

console.log(escolar.charAt(4)) // Exibe o caractere na posição 4
console.log(escolar.charAt(5)) // Exibe o caractere na posição 5
console.log(escolar.charCodeAt(3)) // Exibe o código do caractere na posição 3
console.log(escolar.indexOf('3')) // Exibe o índice do caractere '3'
console.log(escolar.substring(1)) // Exibe a substring a partir do índice 1
console.log(escolar.substring(0, 3)) // Exibe a substring do índice 0 ao 3

console.log('Escola '.concat(escolar).concat("!")) // Concatena a string "Escola " com a variável escolar e "!"
console.log('Escola '+ escolar+"!") // Outra forma de concatenação
console.log(escolar.replace(3, 'e')) // Substitui o caractere '3' por 'e'

console.log('Ana,Maria,Pedro'.split(',')) // Divide a string em um array usando a vírgula como separador
//console.log('Ana,Maria,Pedro'.split(/./)) //
