/*
    Date objects = Objects that contain values that represent dates and times These date objects can be changed and formatted
*/
//Date(Year, MOth, Day, Hour, Minute, Second, Mile Seconds)
const date = new Date(1754933837559);
console.log(date);

const year = date.getFullYear();
console.log(year);

const moth = date.getMonth();
console.log(moth);

const day = date.getDate();
console.log(day);

const hour = date.getHours();
console.log(hour);

const minute = date.getMinutes();   
console.log(minute);

const second = date.getSeconds();
console.log(second);

const dayOfweek = date.getDay();
console.log(dayOfweek);