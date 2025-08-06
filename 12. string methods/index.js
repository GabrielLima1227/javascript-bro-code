// String Methods = Allow you to manipulate and work with text (String)

let userName = "BroCode";
console.log(userName.charAt(2));  
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.startsWith(" "));
console.log(userName.endsWith("e"));

let phoneNumber = "123-456-7890"
console.log(phoneNumber.replaceAll("-","."));
console.log(phoneNumber.padStart(15, "0"));
console.log(phoneNumber.padEnd(15, "0"));