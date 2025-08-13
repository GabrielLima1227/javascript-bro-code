/*
    Element Selectors = Methods used to target and manipulate HTML elements They allow you to select one or multiple HTML elements from the DOM (Document Object Model)
    1. document.getElementById()  (ELEMENT OR NULL)
    2. document.getElementsClassName()  (HTML COLLECTION)
    3. document.getElementsByTagName()  (HTML COLLECTION)
    4. document.querySelector()  (ELEMENT OR NULL)
    5. document.querySelectorAll()  (NODELIST)
*/

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "red";
myHeading.style.textAlign = "center";
console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
for (let fruit of fruits) {
    fruit.style.backgroundColor = "blue";
    fruit.style.color = "white";
}
console.log(fruits);

const h4Elements = document.getElementsByTagName("h4");
for (let h4Element of h4Elements) {
    h4Element.style.backgroundColor = "green";
}
console.log(h4Elements);

const liElements = document.getElementsByTagName("li");
for (let liElemnt of liElements) {
    liElemnt.style.backgroundColor = "lightgreen";
}
console.log(liElements);

const element = document.querySelector(".fruits");
element.style.backgroundColor = "yellow";
console.log(element);

const elements = document.querySelectorAll("li");
elements.forEach(element => {
    element.style.backgroundColor = "grey";
})
console.log(elements);
