/*
    Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
                            Old pattern to handle asynchronous functions.
                            Use Promises + async/await to avoid Callback Hell
*/

function task01(callback){
    setTimeout(() => {
        console.log("Task 1 complete!");
        callback()
    }, 2000)
}

function task02(callback){
    setTimeout(() => {
        console.log("Task 2 complete!");
        callback();
    }, 1000)
}

function task03(callback){
    setTimeout(() => {
        console.log("Task 3 complete!");
        callback();
    }, 3000)
}

function task04(callback){
    setTimeout(() => {
        console.log("Task 4 complete!");
        callback();
    }, 1500)
}

task01(() => {
    task02(() => {
        task03(() => {
            task04(() => {
                console.log("All Tasks Complete");
            });
        });
    });
});