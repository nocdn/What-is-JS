"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";   // reserved keyword
// const private = 534;         // reserved keyword
// const if = 23;               // reserved keyword


// Functions
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");


// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
//    name        parameter     returns all this      uses the parameter
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));


// Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


// Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Jonas"));



// Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgDolphins = calcAverage(440, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const checkWinner = function (dolphins, koalas) {
  if (dolphins >= koalas * 2) {
    return `Dolphins win! (${dolphins} vs ${koalas})`;
  } else if (koalas >= dolphins * 2) {
    return `Koalas win! (${koalas} vs ${dolphins})`;
  } else {
    return `Nobody wins!`;
  }
};

console.log(checkWinner(avgDolphins, avgKoalas));


// Arrays

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Basic Array Operations (Methods)

const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
// doing this will return the length of the array which you can save into the variable newLength
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //removes first element and returns it
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); //returns -1 if element is not in array

friends.push(23);
console.log(friends.includes("Steven")); //returns true or false, ES6 feature
console.log(friends.includes("Bob"));
console.log(friends.includes("23")); //returns false because it is a string

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}


// Coding Challenge #2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);



// Objects

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);



/////////////////////////////// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   console.log(this)
  //   return 2037 - birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummmary: function () {
    return `${this.firstName} is a ${jonas.age}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummmary());



////////////////////////////////////////
// Coding Challenge #3

// BMI = mass / height ** 2
// or BMI = mass / (height * height)

const mark = {
  firstName: "Mark",
  lastName: "Wattney",
  mass: 78, //kg
  height: 1.69, //m

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Stanley",
  mass: 92, //kg
  height: 1.95, //m

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

john.calcBMI();
mark.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(
    `Mark's BMI (${mark.BMI}) is higher than John's BMI (${john.BMI})`
  );
} else if (john.BMI > mark.BMI) {
  console.log(
    `John's BMI (${john.BMI}) is higher than Mark's BMI (${mark.BMI})`
  );
} else {
  console.log("Their BMI is the same!");
}



//////////////////////////////
// LOOPS //
//////////////////////////////

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetitions ${rep}`);
// }

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]); //.push add item to the end of the array
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

////////// continue and break statements

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- STOP AT NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  if (typeof jonasArray[i] === "number") break;
}



///////// Looping backwards and forwards

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Rep ${rep}`);
  }
}



////////// While loops

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetitions ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights: ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}!`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

*/

////////////////////////////////////////
// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  let tipAmount = calcTip([bills[i]]);
  tips.push(tipAmount);
  totals.push(bills[i] + tipAmount);
}

console.log("Bills:");
console.log(bills);
console.log("Tips:");
console.log(tips);
console.log("Totals:");
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(`Average:`);
console.log(calcAverage(totals));
