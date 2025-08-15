/*
    JSON = (JavaScript Object Notation) data-interchange format  Used for exchanging data between a server and a web application JSON files {key:value} OR [value1, value2, value3]
    JSON.stringify() = converts a JS object to a JSON string.
    JSON.parse() = converts a JSON string to a JS object
*/

// ---------- JSON.stringify() ----------
const jsonNames = ["SpongeBob", "Patrick", "Squidward", "Sandy"];
const jsonPerson = {"name": "SpongeBob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing","Karate","Cooking"]}
const jsonPeople = [{"name": "SpongeBob", "age": 30, "isEmployed": true},
                {"name": "Patrick", "age": 34, "isEmployed": false},
                {"name": "Squidward", "age": 50, "isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": true}
]
const jsonStringNames = JSON.stringify(jsonNames);
const jsonStringPerson = JSON.stringify(jsonPerson);
const jsonStringPeople = JSON.stringify(jsonPeople);

console.log(jsonStringNames);
console.log(jsonStringPerson);
console.log(jsonStringPeople);
// ---------- JSON.parse() ----------
const jasonParse01 = JSON.parse(jsonStringNames);
const jasonParse02 = JSON.parse(jsonStringPerson);
const jasonParse03 = JSON.parse(jsonStringPeople);

console.log(jasonParse01);
console.log(jasonParse02);
console.log(jasonParse03);
// ---------- fetch() ----------
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => {console.log(value);}))
    .catch(error => console.log(error));