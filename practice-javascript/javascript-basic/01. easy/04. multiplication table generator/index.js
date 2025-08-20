/*
    o	Crie uma função que gere a tabuada de um número específico (1 a 10)
    o	Exiba o resultado no console de forma organizada
*/

let numero = Number(window.prompt("De qual número deseja obter a Tabuada: ").trim());
const multiplos = [1,2,3,4,5,6,7,8,9,10];

multiplos.forEach((multiplicador) => {
    console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
});