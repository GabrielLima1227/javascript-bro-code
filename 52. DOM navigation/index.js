/*
    DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.
    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children
*/

// ---------- .firstElementChild ----------
const ulElementsFirstChild = document.querySelectorAll("ul");
ulElementsFirstChild.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    if (firstChild) {
        firstChild.style.backgroundColor = "yellow";
    }
});

// ---------- .lastElementChild ----------
const ulElementsLastChild = document.querySelectorAll("ul");
ulElementsLastChild.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    if (lastChild) {
        lastChild.style.backgroundColor = "lightblue";
    }
});

// ---------- .nextElementSibling ----------
const vegetablesElement = document.getElementById("vegetables");
if (vegetablesElement) {
    const nextSibling = vegetablesElement.nextElementSibling;
    if (nextSibling) {
        nextSibling.style.backgroundColor = "lightgreen";
    }
}

// ---------- .previousElementSibling ----------
const dessertsElement = document.getElementById("desserts");
if (dessertsElement) {
    const prevSibling = dessertsElement.previousElementSibling;
    if (prevSibling) {
        prevSibling.style.backgroundColor = "lightcoral";
    }
}

// ---------- .parentElement ----------
const iceCreamElement = document.getElementById("ice cream");
if (iceCreamElement) {
    const parent = iceCreamElement.parentElement;
    if (parent) {
        parent.style.backgroundColor = "orange";
    }
}

// ---------- .children ----------
const fruitsElement = document.getElementById("fruits");
if (fruitsElement) {
    const childrenOfFruits = fruitsElement.children;
    Array.from(childrenOfFruits).forEach(child => {
        child.style.backgroundColor = "cyan";
    });
}