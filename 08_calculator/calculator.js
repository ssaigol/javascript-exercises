const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, number) => sum + number, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1)
};

const power = function(a, b) {
  let total = a;
  if (b > 1) {
    for (let i = 1; i < b; i++) {
      total = total * a;
    }
  }
  return total;
};

const factorial = function(a) {
	if (a < 2) return 1;
  let total = a;
  for (let i = a - 1; i > 0; i--) {
    total = total * i;
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
