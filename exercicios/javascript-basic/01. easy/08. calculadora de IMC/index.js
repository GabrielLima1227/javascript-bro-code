/*
    o	Implemente uma função que calcule o IMC (peso/altura²)
    o	Classifique o resultado (baixo peso, normal, sobrepeso, obesidade)
*/

function imc(peso, altura){
    let imc = peso / (altura**2);

    if (imc < 18.5){
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9){
        console.log("Peso normal");
    } else if (imc >= 25 && imc <= 29.9){
        console.log("Sobrepeso");
    } else if (imc >= 30 && imc <= 39.9){
        console.log("Obesidade");
    } else{
        console.log("Obesidade grave");
    }
}

