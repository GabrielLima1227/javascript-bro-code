/*
    Spread Operator = ... Allows an Interable such as an Array or String to be expanded into sperate elements (Unpack The Elements)
*/

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimun = Math.min(...numbers);
console.log(maximum);
console.log(minimun);


let userName = "Bro Code";
let letters = [...userName].join("-");
console.log(letters);

let fruits = ["apple", "onrage", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let food = [...fruits, ...vegetables, "eggs", "milk"];
console.log(food);