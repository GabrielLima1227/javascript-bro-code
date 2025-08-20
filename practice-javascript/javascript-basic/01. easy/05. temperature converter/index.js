/*
    Funções para converter temperaturas entre Celsius e Fahrenheit
    Fórmulas:
    C = (F - 32) * 5/9
    F = (C * 9/5) + 32
*/

function celsiusToFahrenheit() {
    let celsius = Number(window.prompt("Informe a temperatura em Celsius para converter para Fahrenheit:"));
    
    if (isNaN(celsius)) {
        window.alert("Valor inválido! Digite um número.");
        return;
    }

    let fahrenheit = (celsius * 9) / 5 + 32;
    window.alert(`A temperatura de ${celsius}°C convertida para Fahrenheit é ${fahrenheit.toFixed(2)}°F`);
}

function fahrenheitToCelsius() {
    let fahrenheit = Number(window.prompt("Informe a temperatura em Fahrenheit para converter para Celsius:"));
    
    if (isNaN(fahrenheit)) {
        window.alert("Valor inválido! Digite um número.");
        return;
    }

    let celsius = (fahrenheit - 32) * (5 / 9);
    window.alert(`A temperatura de ${fahrenheit}°F convertida para Celsius é ${celsius.toFixed(2)}°C`);
}

let userChoice = window.prompt("Deseja converter para Celsius ou Fahrenheit? Digite [C] para Celsius ou [F] para Fahrenheit:").trim().toLowerCase();

if (userChoice === "c") {
    fahrenheitToCelsius();
} else if (userChoice === "f") {
    celsiusToFahrenheit();
} else {
    window.alert("Opção inválida! Escolha [C] ou [F].");
}