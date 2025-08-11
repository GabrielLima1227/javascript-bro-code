/*
    destructuring = extract values from arrays and objects, then assign them to variables in a convenient way.
    [] = to perform array destructuring.
    {} = to perform object destructuring.
*/

let a = 1;
let b = 2;

[a, b] =  [b, a];

console.log(a);
console.log(b);

const colors = ["red", "green", "blue","black", "white"]

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

const person01 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const person02 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job = "Unemployed"} = person02;
console.log(firstName); 
console.log(lastName);
console.log(age);
console.log(job);

function displayPerson({firstName, lastName, age, job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`)
}