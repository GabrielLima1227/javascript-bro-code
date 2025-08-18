// Digital Clock Program

function updateClock(){
    const date_time = new Date();

    let hours = date_time.getHours();
    hours = hours.toString().padStart(2, "0");

    const meridiem = hours >= 12 ? "PM" : "AM" ;
    const minutes = date_time.getMinutes().toString().padStart(2, "0");
    const seconds = date_time.getSeconds().toString().padStart(2, "0");

    const clock = document.getElementById("clock");
    clock.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`
}

updateClock();
setInterval(updateClock, 1000);