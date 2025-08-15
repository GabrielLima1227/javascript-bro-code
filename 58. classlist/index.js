/*
    ClassList = Element property in JavaScript used to interact.
                        with an element's list of classes (CSS classes)
                        Allows you to make reusable classes for many elements
                        across your webpage.

    add()
    remove()
    toggle(Remove if present, And if Not)
    replace(Oldclass, NewClass)
    conatins()
*/

const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");
myButton.classList.remove("enabled");

/*
myButton.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
})

myButton.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover");
})
*/

myButton.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
})

myButton.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
})

myButton.classList.add("enabled")
myButton.addEventListener("click", (event) => {
    if (event.target.classList.contains("enabled")) {
        event.target.classList.replace("enabled", "disabled");
        event.target.textContent += "😡";
    } else{
        event.target.classList.replace("disabled", "enabled")
    }
})

const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");
myH1.addEventListener("click", (event) => {
    if (event.target.classList.contains("enabled")) {
        event.target.classList.replace("enabled", "disabled");
        event.target.textContent += "😡";
    } else{
        event.target.classList.replace("disabled", "enabled")
    }
})

const myButtons = document.querySelectorAll(".myButtons");
myButtons.forEach((button) => {
    button.classList.add("enabled");
})

myButtons.forEach((button) => {
    button.addEventListener("mouseover", (event) => {
        event.target.classList.toggle("hover");
    })
})

myButtons.forEach((button) => {
    button.addEventListener("mouseout", (event) => {
        event.target.classList.toggle("hover");
    })
})

myButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.classList.contains("disabled")) {
            event.target.textContent += "😡";
        }else{
            event.target.classList.replace("enabled", "disabled");
        }
    })
})