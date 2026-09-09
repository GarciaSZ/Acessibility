let tamanhoGrande = false;

function aumentarTexto() {
    document.body.classList.remove("texto-pequeno");
    document.body.classList.add("texto-grande");
    tamanhoGrande = true;
}

let tamanhoPequeno = false;

function diminuirTexto() {
    document.body.classList.remove("texto-grande");
    document.body.classList.add("texto-pequeno");
    tamanhoPequeno = true;
}

function altoContraste() {
    document.body.classList.toggle("contraste");
}

function lerPagina() {
    speechSynthesis.cancel();
    const texto =document.getElementById("conteudo").innerText;
    const leitura = new SpeechSynthesisUtterance(texto);
    leitura.lang = "pt-BR";
    leitura.rate = 1.5;
    speechSynthesis.speak(leitura);
}

function pararLeitura() {
    speechSynthesis.cancel();
}