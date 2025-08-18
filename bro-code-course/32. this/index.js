/* 
    this = reference to the object where This is used (the object depends on the immediate context) 
    person.name = this.name;
*/

const person01 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hello, I'm ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}
person01.sayHello();
person01.eat();

const person02 = {
    name: "Patrcik Star",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hello, I'm ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}
person02.sayHello();
person02.eat();