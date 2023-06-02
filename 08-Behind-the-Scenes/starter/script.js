'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

// Regular function call: this keyword points to undefined
// Method call: this keyword points to the object that is calling the method

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

// Arrow functions don't get their own this keyword, they simply use the this keyword of the function they are written in (in this case, the global scope)

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();
