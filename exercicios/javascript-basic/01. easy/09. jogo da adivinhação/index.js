/*
    o	Gere um número aleatório entre 1-100
    o	Permita que o usuário tente adivinhar com dicas de "maior" ou "menor"
*/


const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let palpite;

while (palpite !== numeroAleatorio) {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
    tentativas++;

    if (isNaN(palpite)) {
        alert("Por favor, digite um número válido.");
        continue;
    }

    if (palpite < numeroAleatorio) {
        alert("O número é maior. Tente novamente.");
    } else if (palpite > numeroAleatorio) {
        alert("O número é menor. Tente novamente.");
    }
}

alert(`Parabéns! Você adivinhou o número ${numeroAleatorio} em ${tentativas} tentativas.`);