console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------
const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "white";
h1.style.background = "red";

//* EXAMPLE-2
//*-------------------------------------------

const myInput = document.getElementById("input");
const button = document.getElementById("btn");

button.style.background = "black";
button.style.color = "white";
button.style.width = "7rem";
button.style.border = "none";

button.style.borderRadius = "10px"; //*borderRadius şeklinde CamelCase olarak verilir ve de "" işareti içine yazılır.

button.style.padding = "1rem";
button.style.fontSize = "1.1rem";
myInput.style.padding = "1rem";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
const list = document.getElementsByTagName("li");
console.log(list); //? HTML Collection
list[2].style.color = "red";

const elementThree = list.item(3);
elementThree.style.color = "blue";
elementThree.textContent = "React / Vue / Angular";

list[4].innerText = "Django / Flask";
//*EXAMPLE-3
//*-------------------------------------------

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------

//* ========================================
//*              QUERYSELECTOR()
//* ========================================