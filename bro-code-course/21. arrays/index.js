/*
    Array = A Variable Like Structure That Can Hold More Than 1 Value
*/
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");
fruits.shift();
fruits.sort();
fruits.reverse();

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");

console.log(index);

for(let fruit of fruits){
console.log(fruit);
}