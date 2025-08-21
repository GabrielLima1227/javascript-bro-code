/*
variable = A container that stores a value.
        behaves as if it were the value it 

    1. declaration let x;
    2. assignment  x = 100;
*/

// Numbers
let age = 25;
let price = 10.99;
let gpa = 2.1;
// Strings
let firstName = "Bro"
let favoriteFood = "Pizza"
let email = "Bro123@gmail.com"
// Boolean
let online = true
let forSale = false

console.log(typeof gpa);
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your gpa is ${gpa}`);

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);

console.log(typeof online);
console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`)

let fullName = "Bro Code";
let age2 = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age2}`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;