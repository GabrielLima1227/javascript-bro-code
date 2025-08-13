// ---------- EXAMPLE 1 h1 ELEMENT ----------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");


// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like Pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);

document.getElementById("box04").append(newH1);
// document.getElementById("box01").prepend(newH1);

//  const box04  = document.getElementById("box04");
//  document.body.insertBefore(newH1, box04);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
document.getElementById("box04").removeChild(newH1);