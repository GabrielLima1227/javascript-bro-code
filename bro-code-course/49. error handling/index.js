// Error = An Object that is created to represent a problem that occurs often whit user input or establishing a connection.
/*
    Try {} = Enclose code that might pontentially cause an error.
    Catch {} = Catch and handle any throw Erros from try {}.
    finally {} = (Opitinal) Always execute. Used mostly for clean up.
        Ex. Close Files, Close Connections, Release Resources.
*/
try{
    console.log("Hello");
    /*
        Network Erros,
        Promise Rejection,
        Security Erros.
    */
}
catch(error){
    console.error(error);
}
finally{
    console.log("This Always Execute!");
    /*
        Close Files, 
        Close Connections, 
        Release Resources.
    */
}
document.getElementsByClassName

console.log("You have reached the end!");

try{
    const dividend = Number(window.prompt("Enter a Dividend: "));
    const divisor = Number(window.prompt("Enter a Divisor: "));
    if (divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if (isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch (error){
    console.error(error);
}

console.log("You have reached the end!");