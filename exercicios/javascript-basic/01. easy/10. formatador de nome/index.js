/*
    o	Crie uma função que receba nome completo e retorne formatado
    o	Primeira letra maiúscula de cada palavra, resto minúsculo
*/
function formatarNome(nome) {
    let nomeLimpo = nome.trim().toLowerCase();
    let arrayNome = nomeLimpo.split(" ");

    let nomeFormatado = arrayNome.map(function(palavra) {
        if (palavra.length > 0) {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        }
        return '';
    }).join(" ");

    return nomeFormatado;
}

let nome = window.prompt("Qual o seu nome?");
let nomeFinal = formatarNome(nome);

console.log(nomeFinal);