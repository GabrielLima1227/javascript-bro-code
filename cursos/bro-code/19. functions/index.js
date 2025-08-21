/**
    Function = A section of reusable code.
    Declare code once, use it whenever you want.
    Call the function to execute that code.
 */

function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You'are ${age} years old`);
}

happyBirthday("Brocode", 25)
happyBirthday("Spongebob", 30)
happyBirthday("Patrick", 37)

function add(x, y){
    let result = x + y;
    return result;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    let result = x * y;
    return result;
}
function divide(x, y){
    return x / y;
}

answer = add(2,3)
console.log(answer)

answer = subtract(2,3)
console.log(answer)

answer = multiply(2,3)
console.log(answer)

answer = divide(2,3)
console.log(answer)