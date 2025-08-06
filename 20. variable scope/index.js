/*
    Variable Scope = Where a Variable is Recognized and Accessible (Local vs Global)
*/

let x = 3

function2();

function function1(){
    let x = 1
    log(x) ;
}
function function2(){
    let x = 2
    console.log(x);
}