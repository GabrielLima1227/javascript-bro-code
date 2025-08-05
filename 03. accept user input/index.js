/*
    How to accept user input

    1. Easy Way = Window Prompt
    2.Professional Way = HTML textbox
*/
/* 
    let userName = window.prompt("What's your username?");
    console.log(userName);
*/
let userName;
document.getElementById("mySubmit").onclick = function (){
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${userName}!`;
}