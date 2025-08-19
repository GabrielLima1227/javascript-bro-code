/*
    o	Crie uma função que receba dois números e uma operação (+, -, *, /) e retorne o resultado
    o	Teste com diferentes valores e operações
*/
let numbers = [];
let resposta = true;

while (resposta) {
    let input = window.prompt("Digite um número abaixo:");
    
    if (input === null) break;
    
    let number = Number(input);

    if (!isNaN(number)) {
        numbers.push(number);
        let mensagem = window.prompt("Deseja continuar [Y/N]?");
        if (!mensagem || mensagem.toLowerCase() !== 'y') {
            resposta = false;
        }
    } else {
        window.alert("O valor digitado não é um número! Por favor, digite um valor válido.");
    }
}

let operação = window.prompt("Qual Operação deseja realizar com os Números [+, -, *, /]: ");

switch (operação){
    case "+":
        let soma = numbers.reduce((resultado, numero) => {return resultado + numero;}, 0)
        console.log(`A Soma entre todos os números digitador é: ${soma}`);
        break;
    case "-":
        let subtracao = numbers.reduce((resultado, numero) => {return resultado - numero;})
        console.log(`A Subtração entre todos os números digitador é: ${subtracao}`);
        break;
    case "*":
        let multiplicacao = numbers.reduce((resultado, numero) => {return resultado * numero;}, 1)
        console.log(`A Multiplicação entre todos os números digitador é: ${multiplicacao}`);
        break;
    case "/":
        let divisao = numbers.reduce((resultado, numero) => {return resultado / numero;})
        console.log(`A Divisão entre todos os números digitador é: ${divisao}`);
        break;
    default:
        window.alert("A operação inserida não é válida!");
        break;
}
