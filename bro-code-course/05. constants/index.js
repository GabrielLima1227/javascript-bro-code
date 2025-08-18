// Const = A variable That Can't be Changed

const PI = 3.14159;
let radius;
let circunference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circunference = 2 * PI * radius;
    document.getElementById("myH1").textContent =  `The circunference is ${circunference}cm`;
}