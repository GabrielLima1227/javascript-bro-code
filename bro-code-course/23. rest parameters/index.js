/*
    Rest Parameters = (...rest) allow a function work with a variable number of arguments by building them into an array
    Spread = Expands an array into seperate elements
    Rest = budles seperate elements into an array
*/
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
openFridge("Pizza", "Hamburger", "Hot Dog", "Sushi", "Ramen")
const foods = getFood("Pizza", "Hamburger", "Hot Dog", "Sushi", "Ramen")
console.log(foods)