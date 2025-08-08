/*
    forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element
    array.forEach(callback)
*/
let numbers = [1,2,3,4,5];

numbers.forEach(display);
numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(square);

function double(element){
    element *= 2
    console.log(element);
}
function triple(element){
    element *= 3
    console.log(element);
}
function square(element){
    element = Math.pow(element, 2);
    console.log(element);
}
function display(element){
    console.log(element);
}