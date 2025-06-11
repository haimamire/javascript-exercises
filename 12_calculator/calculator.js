const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, item) => acc + item, 0)
};

const multiply = function(arr) {
	return arr.reduce((acc, item) => acc * item, 1)
};

const power = function(number, n) {
  let result = number;
  for (let i = 1; i < n; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
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
