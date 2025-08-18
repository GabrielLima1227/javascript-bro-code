/* 
    Arrow Functions = a concise way to write function expressions good for simple functions that you use only once (parameters) => some code
*/

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => { return Math.pow(element, 2);});
const cubes = numbers.map((element) => { return Math.pow(element, 3);});
const evenNums = numbers.filter((element) =>  { return element % 2 === 0;});
const oddNums = numbers.filter((element) => { return element % 2 !== 0;});
const total = numbers.reduce((accumulator, element) => { return accumulator + element;});

console.log(total);