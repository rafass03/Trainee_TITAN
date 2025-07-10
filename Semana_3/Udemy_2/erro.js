function tratarErroELancar(erro) {
    //throw new Error("Erro");
    //throw 10
    //throw true
    //throw "Mensagem de erro"
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }
}

function imprimrirNomeGritado(){
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } 
    catch (e) {
        tratarErroELancar(e);
    }
    finally {
        console.log('final');
    }
}

const obj = { name: "Roberto" }
imprimrirNomeGritado(obj);