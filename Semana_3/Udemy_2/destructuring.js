const pessoa = {
  nome: 'João',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
};

const { nome, idade } = pessoa;
console.log(nome, idade); // João 5

const { nome: n, idade: i } = pessoa;
console.log(n, i); // João 5

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada); // undefined true

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep); // Rua ABC 1000 undefined

const {conta: {ag, num}} = pessoa
// console.log(ag, num); // undefined undefined