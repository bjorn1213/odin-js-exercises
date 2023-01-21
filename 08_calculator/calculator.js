const add = function() {
	return Array(...arguments).reduce((total, arg) => {
    return total + arg;
  }, 0);
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, arg) => {
    return total + arg;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, arg) => {
    return total * arg;
  }, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  let total = 1;
  for (let i = num; i > 0; i--){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
