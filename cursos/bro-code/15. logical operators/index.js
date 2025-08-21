/*
    Logical Operators = Used to combine or manipulate boolean values (True or False)
    And = &&
    Or = ||
    Not = !
*/
const temp = 20;

if (temp >= 0 && temp <= 30) {
    console.log("The Weather is Good");
} else{
    console.log("The Weather is Bad");
}

if (temp <= 0 || temp > 30) {
    console.log("The Weather is Bad");
} else{
    console.log("The Weather is Good");
}

const isSunny = true;

if (!isSunny) {
    console.log("It is Cloudy");
} else{
    console.log("It is Sunny");
}