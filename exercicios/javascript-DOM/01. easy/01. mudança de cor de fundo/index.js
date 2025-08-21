/*
    o	Botão que altera cor de fundo da página
    o	Use cores aleatórias ou array predefinido
*/

let botaoMudarTema = document.getElementById("mudar-tema");
const body = document.body;

botaoMudarTema.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
        botaoMudarTema.textContent = "Tema Claro";
    } else {
        botaoMudarTema.textContent = "Tema Escuro";
    }
});