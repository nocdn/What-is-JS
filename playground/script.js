"use strict";

const counter = document.querySelector(".counter");
const button = document.querySelector(".button");

let clicked = 0;

button.addEventListener("click", function () {
  clicked += 1;
  counter.textContent = "The button has been pressed " + clicked + " times";
});
