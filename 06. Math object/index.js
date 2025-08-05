/*
    Math = Built-in Object that provides a Collection of properties and methods
*/

let x = 3.21;
let y = 2;
let z;

z = Math.round(x);
console.log(z);

z = Math.floor(x);
console.log(z);

z = Math.ceil(x);
console.log(z);

z = Math.trunc(x);
console.log(z);

z = Math.pow(x, y);
console.log(z);

x = 81;
z = Math.sqrt(x);
console.log(z);

x = 10;
z = Math.log(x);
console.log(z);

x = 45;
z = Math.sin(x);
console.log(z);

z = Math.cos(x);
console.log(z);

z = Math.tan(x);
console.log(z);

x = -3.21;
z = Math.abs(x);
console.log(z);

z = Math.sign(x);
console.log(z);

let max = Math.max(x,y,z);
console.log(max);

let min = Math.min(x,y,z);
console.log(min);