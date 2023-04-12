const textos = document.getElementById('TextPrimero');
const textonuevo = document.getElementById('Text');

window.addEventListener('load', () => {
    let frase = textos.textContent;
    textos.textContent = '';
    let frasesegunda = textonuevo.textContent;
    textonuevo.textContent = '';
    let i = 0;

    function mostrarLetra() {
    if (i < frase.length) {
        textos.textContent += frase[i];
        i++;
        setTimeout(mostrarLetra, 100);
    } else if (i === frase.length) {
        i = 0;
        mostrarLetra2();
    }
}

    function mostrarLetra2() {
    if (i < frasesegunda.length) {
        textonuevo.textContent += frasesegunda[i];
        i++;
        setTimeout(mostrarLetra2, 100);
    }
}

    mostrarLetra();
});
