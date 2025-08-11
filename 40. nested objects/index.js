/*
    nested objects = Objects inside of other Objects.
    Allows you to represent more complex data structures.
    Child Object is enclosed by a Parent Object.

    Person(Address{}, ContactInfo{}}
    ShoppingCart{Keyboard {}, Mouse(), Monitor{}}
*/

const person ={
    fullName: "Spongebob SquarePants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "123 Conch st.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);

for(const property in person.address){
    console.log(person.address[property]);
}

class Person{
    constructor(fullName, age,...address) {
        this.fullName = fullName;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country) {
        this.street = street;        
        this.city = city;
        this.country = country;
    }
}

const perso01 = new Person("Spongebob SquarePants", 30, "124 Conch st.", "Bikini Bottom", "Int. Water");
const perso02 = new Person("Patrick Star", 34, "126 Conch st.", "Bikini Bottom", "Int. Water");
const perso03 = new Person("Squidward", 34, "128 Conch st.", "Bikini Bottom", "Int. Water");

console.log(perso02.address.city);
console.log(perso01.address.street);
console.log(perso01.address.country);