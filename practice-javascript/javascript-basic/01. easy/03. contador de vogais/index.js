/*
    o	Escreva uma função que conte quantas vogais há em uma string
    o	Considere tanto minúsculas quanto maiúsculas
*/
function contarVogais(texto) {
    const vogaisPermitidas = 'aeiou';
    
    const vogaisEncontradas = [...texto].filter((caractere) => vogaisPermitidas.includes(caractere));
    
    return vogaisEncontradas;
}

let entrada = window.prompt("Digite algo: ").trim().toLowerCase();
let resultado = contarVogais(entrada);
console.log(resultado);