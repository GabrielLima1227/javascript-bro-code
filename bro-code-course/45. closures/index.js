/*
    closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
    Allow for private variables and state maintenance Used frequently in JS frameworks: React, Vue, Angular
*/

function outer(){
    let mensage = "hello";
    function inner(){
        console.log(mensage);
    }
    inner();
}

outer();

function createCounter(){
    let counter = 0;

    function increment(){
        counter++;
        console.log(counter);
    }
    return {increment};
}

const counter = createCounter();
counter.increment();