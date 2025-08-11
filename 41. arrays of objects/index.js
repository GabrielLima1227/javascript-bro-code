const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}]

fruits.push({name: "grapges", color:"purple", calories: 62});
console.log(fruits);
fruits.pop({name: "grapges", color:"purple", calories: 62});
console.log(fruits);

fruits.splice(1, 2);
console.log(fruits);

fruits.forEach(fruits => console.log(fruits.name));
const fruitsName = fruits.map(fruits => fruits.name);
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")

console.log(fruitsName);
console.log(yellowFruits);