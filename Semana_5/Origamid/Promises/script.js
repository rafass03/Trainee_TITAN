// const promessa = new Promise(function(resolve, reject) {
//     let condicao = true;
//     if (condicao) {
//         setTimeout(() => {
//              resolve({nome: "Andre", idade: 28});
//         }, 100);
//     } else {
//         reject(new Error('Erro'));
//     }
// });

// const retorno = promessa.then(function(resolucao) {
//     console.log(resolucao);
//     resolucao.profissao = "Designer";
//     return resolucao;
// }).then(resolucao => {
//     console.log(resolucao);
// }).catch(rejeitado => {
//     console.logo(rejeitado)
// }).finally(() => {
//     console.log('Finalizado');
// })

// console.log(retorno);

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado');
    }, 1000);
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados');
    }, 1500);
})

const carregouTudo = Promise.all([login, dados]); //race: o primeiro que carrega
carregouTudo.then(respostas => {
    console.log(respostas);
});