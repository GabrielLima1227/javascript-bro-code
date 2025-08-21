/*
    DOM DOCUMENT OBJECT MODEL:
    Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
    Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
    JavaScript can access the DOM to dynamically
    change the content, structure, and style of a web page.
*/
document.getElementById("");
document.title = "My Website";
document.body.style.backgroundColor = "rgb(0, 0, 0)";
document.getElementById("welcome-m").style.color = "rgb(255,255,255)";

console.log(document);

const userName = "Bro Code";
document.getElementById("welcome-m").textContent50. DOM = `Welcome ${userName}`;