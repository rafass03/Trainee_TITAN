//1
// function mudarClasse () {
//     document.body.classList.toggle('active');
// }

// setInterval(mudarClasse, 2000);

//2
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', inicarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function inicarTempo () {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo () {
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo () {
    tempo.innerText = 0;
    i = 0;
}