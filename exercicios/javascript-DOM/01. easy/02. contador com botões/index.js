/*
    o	Display mostrando número
    o	Botões para incrementar, decrementar e zerar
*/

const incrementar = document.getElementById("incrementar");
const resetar = document.getElementById("resetar");
const decrementar = document.getElementById("decrementar");
const displayContador = document.getElementById("contador");    

let valorContador = 0;

incrementar.addEventListener("click", () => {
    valorContador++;
    displayContador.textContent = valorContador;
})

resetar.addEventListener("click", () => {
    valorContador = 0;
    displayContador.textContent = valorContador;
})

decrementar.addEventListener("click", () => {
    valorContador--;
    displayContador.textContent = valorContador;
})