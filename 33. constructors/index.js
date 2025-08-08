/*
    Constructor = Special Method For Defining the Properties and Methods of Objects 
*/

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive ${this.model}`)}
}
const car01 = new Car("Ford", "Mustang", 2024, "Red")

console.log(car01.make)
console.log(car01.model)
console.log(car01.year)
console.log(car01.color)
car01.drive()

const car02 = new Car("Chevolet", "Camaro", 2025, "Blue")

console.log(car02.make)
console.log(car02.model)
console.log(car02.year)
console.log(car02.color)
car02.drive()

const car03 = new Car("Dodge", "Charger", 2026, "Silver")

console.log(car03.make)
console.log(car03.model)
console.log(car03.year)
console.log(car03.color)
car03.drive()