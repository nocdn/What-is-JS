"use strict";

/*
const x = 23;

//    name       parameter     returns this
const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1991));

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures? Answer: use a loop
// - What's a sensor error? And what to do? Answer: ignore

// 2) Breaking up into sub-problems
// - How to ignore errors? Answer: use a conditional statement
// - Find max value in temp array? Answer: use a loop and a variable
// - Find min value in temp array? Answer: use a loop and a variable

const calcTempAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    let currentTemp = temps[i];

    if (maxTemp < currentTemp) maxTemp = currentTemp;
    if (minTemp > currentTemp) minTemp = currentTemp;
  }
  console.log();
  const amplitude = maxTemp - minTemp;
  return [minTemp, maxTemp, amplitude];
};

const minTemperature = calcTempAmplitude(temperatures)[0];
const maxTemperature = calcTempAmplitude(temperatures)[1];
const amplitude = calcTempAmplitude(temperatures)[2];

console.log(`The maximum temperature is ${maxTemperature}`);
console.log(`The minimum temperature is ${minTemperature}`);
console.log(`The amplitude is ${amplitude}`);

*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
