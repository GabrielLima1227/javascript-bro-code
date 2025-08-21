/*
    String Slicing = Creating a subtring from a portion of another String 
    String.Slice(Start, End);
*/
const fullName = "Bro Code";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
let fisrtChar = fullName.slice(0,1)
let lastChar = fullName.slice(-1)

console.log(firstName);
console.log(lastName);
console.log(fisrtChar);
console.log(lastChar);

const email = "Bro1@gmail.com"

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1)
console.log(userName);
console.log(extension);