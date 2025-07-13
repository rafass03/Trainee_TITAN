//1
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
    console.log(event);
}

function buscaCep(cep) {
    fetch (`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.text())
        .then(body => {
            resultadoCep.innerText = body;
    })
}

//2
const btcDisplay = document.querySelector('.btc');
function fetchBtc () {
    fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(btcJson => {
            btcDisplay.innerText = ("R$ " + btcJson.BRL.buy).replace('.', ',');
    })
}

//setInterval(fetchBtc, 500);
fetchBtc();

//3
const btnProxima = document.querySelector('.proxima');
const pPiada = document.querySelector('.piada');
function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(piada => {
            pPiada.innerText = piada.value;
    });
}

btnProxima.addEventListener('click', puxarPiada);
puxarPiada();