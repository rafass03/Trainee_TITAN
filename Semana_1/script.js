function toggleMode(){
    const html = document.documentElement;
    /*if(html.classList.contains('light')) {
        html.classList.remove('light');
    }
    else {
        html.classList.add('light');
    }*/
    html.classList.toggle('light'); // Alterna a classe 'light' no elemento HTML

    //Pegar a tag
    const img = document.querySelector("#profile img");

    //Substituir a imagem
    //Se tiver light mode, adcionar a imagem light
    if(html.classList.contains('light')) {
        img.setAttribute("src", "./assets/avatar-light.png"); // Se estiver no modo claro, troca a imagem
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos, camisa e jaqueta pretas e fundo azul");
    }
    //Se tiver sem light mode, manter a imagem normal
    else {
        img.setAttribute("src", "./assets/avatar.png"); // Se não estiver no modo claro, mantém a imagem original
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos de sol, camisa e jaqueta pretas e fundo azul");
    }
}