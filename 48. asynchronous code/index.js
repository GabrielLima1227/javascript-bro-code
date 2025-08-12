/*
    Synchronous = Executes line by line consecutively in a sequential manner Code that waits for an operation to complete.

    Asynchronous = Allows multiple operations to be performed concurrently without waiting Doesn't block the execution flow and allows the program to continue (I/0 operations, network requests, fetching data) Handled with: Callbacks, Promises, Async/Await
*/


function func1(callback){
    setTimeout(() => {console.log("Task 01")
        callback()}, 3000);
}

function func2(){
    console.log("Task 02");
    console.log("Task 03");
    console.log("Task 04");
}

func1(func2);