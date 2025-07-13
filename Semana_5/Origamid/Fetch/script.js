// const cep = fetch('https://viacep.com.br/ws/01001000/json')
// cep.then(resolucao => {
//     return resolucao.json()
// }).then(body => {
//     console.log(body.cep)
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body.cep
// })

// const cep = fetch('./style.css')
// cep.then(resolucao => {
//     return resolucao.text()
// }).then(body => {
//     const conteudo = document.querySelector('.conteudo')
//     const style = document.createElement('style')
//     style.innerHTML = body
//     console.log(style)
//     conteudo.appendChild(style)
// })

// const sobre = fetch('./sobre.html')
// const div = document.createElement('div')
// sobre.then(resolucao => {
//     return resolucao.text()
// }).then(body => {
//     console.log(body)
//     div.innerHTML = body
//     const titulo = div.querySelector('h1')
//     document.querySelector('h1').innerText = titulo.innerText
//     console.log(titulo)

// })

// const imagem = fetch('./imagem.png')
// imagem.then(resolucao => {
//     return resolucao.blob()
// }).then(body => {
//     const blobUrl = URL.createObjectURL(body)
//     console.log(blobUrl)
//     const imagemDom = document.querySelector('img')
//     imagemDom.src = blobUrl
//     console.log(body)
// })

// const cep = fetch('https://viacep.com.br/ws/01001000/json')
// cep.then(resolucao => {
//     const resolucao2 = resolucao.clone()
//     resolucao.text().then((text) => {
//         console.log(text)
//     })
//     resolucao2.json().then((json) => {
//         console.log(json)
//     })
// }).then(body => {
//     console.log(body)
// })

// const cep = fetch('https://viacep.com.br/ws/01001000/json')
// cep.then(response => {
//     console.log(response)
//     response.headers.forEach(console.log)
// })

const cep = fetch('https://viacep.com.br/ws/01001000/json')
cep.then(response => {
    console.log(response.type)
    if (response.status === 404) {
        throw new Error('Página não encontrada')
    }
})
