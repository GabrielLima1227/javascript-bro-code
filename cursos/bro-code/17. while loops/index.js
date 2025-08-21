// While Loop = Repeat Some Code While Some Condition Is True
let loggedIn = false;
let userName;
let password;

while (!loggedIn) {
    userName = window.prompt("Enter Your UserName")
    password = window.prompt("Enter Your Password")
    if (userName === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You're logged in!");
    } else{
        console.log("Invalid Credentials! Please Try Again!");
    }
}