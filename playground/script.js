"use strict";

const counter = document.querySelector(".counter");
const button = document.querySelector(".button");

clicked = 0;

button.addEventListener("click", function () {
  clicked += 1;
  counter.textContent = "clicked";
});
