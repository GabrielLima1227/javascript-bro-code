/*
    o   Crie uma função que receba um array de números e retorne apenas os pares
    o   Teste com arrays de diferentes tamanhos
*/

function filtrarNumerosPares(arrayDeNumeros) {
    return arrayDeNumeros.filter(numero => numero % 2 === 0);
}

let listaDeNumeros = [];
let respostaUsuario = "";

while (respostaUsuario !== "n") {
    let entrada = window.prompt("Adicione um número ao array:").trim();

    if (entrada === null) {
        break;
    }

    let numero = Number(entrada);

    if (!isNaN(numero) && entrada !== "") {
        listaDeNumeros.push(numero);
    } else {
        window.alert("Entrada inválida. Por favor, digite um número válido.");
    }

    respostaUsuario = window.prompt("Deseja continuar adicionando números ao array? [y/n]").trim().toLowerCase();

    if (respostaUsuario === null) {
        break;
    }
}

window.alert("Criação do Array encerrada! Verifique o console para ver o resultado.");

const numerosPares = filtrarNumerosPares(listaDeNumeros);

console.log(`Seu array de números: ${listaDeNumeros}`);
console.log(`Apenas os números pares de seu array: ${numerosPares}`);