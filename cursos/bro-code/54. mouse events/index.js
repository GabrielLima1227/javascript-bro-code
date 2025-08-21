/*
    Event Listener = Listen for specific event to create interactive web pages events: clicks, mouseover, mouseout.
    .addEventListener(event, callback);
*/

const myBox = document.getElementById("myBox");
myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕";
})

myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do It 🤨";
})

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😀";
})

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
})

myButton.addEventListener("mouseover", () => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do It 🤨";
})

myButton.addEventListener("mouseout", () => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😀";
})