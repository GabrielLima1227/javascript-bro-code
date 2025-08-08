/* 
    object = A collection of related properties and/or methods Can represent real world objects (people, products, places).
    object = {key:value,function()}
*/

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function() { console.log("Hi! I am Spongebob!")},
    sayBye: function(){console.log("Goodbye!")}
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
person1.sayHello();
person1.sayBye();

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey I'm Patrick..."),
    sayBye: function(){console.log("Bye...")}
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
person2.sayHello();
person2.sayBye();