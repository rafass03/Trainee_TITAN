function pegaDados(funcao) {
    setTimeout(function setTimeout() {
    var dados = {
        nome: "mario"
    }
    funcao(dados);
    }, 2 * 1000);
}

pegaDados(function executaQuandoChegarOsDados(dados) {
    console.log("Dados recebidos:", dados);
});
console.log("1")
console.log("2");
