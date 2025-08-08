/*
    class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function
    Ex. static keyword, encapsulation, inheritance
*/
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Product: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price += this.price * salesTax;
    }
}
const salesTax = 0.05;

const products01 = new Product("Shirt", 19.99);
products01.displayProduct();
console.log(products01.calculateTotal(salesTax).toFixed(2));

const products02 = new Product("Pants", 24.99);
products02.displayProduct();
console.log(products02.calculateTotal(salesTax).toFixed(2))

const products03 = new Product("Underware", 100.00);
products03.displayProduct();
console.log(products03.calculateTotal(salesTax).toFixed(2))