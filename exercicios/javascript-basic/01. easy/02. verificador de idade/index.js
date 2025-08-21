/*
    o	Crie um programa que solicite a idade do usuário e informe se é menor, maior de idade ou idoso (65+).
    o	Use prompt() para entrada e alert() para saída.
*/
let userAge;
let answer = true;
while (answer) {
    let input = window.prompt("Qual a sua Idade Hoje?");
    userAge = Number(input);

    if (isNaN(userAge) || userAge <= 0){ 
        window.alert("Informação Inválida. Por Favor Digite Um Valor Válido.");
    }
    else {
        answer = false;
    }
}

switch (true) {
    case (userAge <= 18):
        window.alert(`Você tem ${userAge} anos e é Menor de Idade.`);
        break;
    case (userAge <= 65):
        window.alert(`Você tem ${userAge} anos e é Maior de Idade.`);
        break;
    default:
        window.alert(`Você tem ${userAge} anos e é Idoso.`);
}