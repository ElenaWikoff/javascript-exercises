const add = function(one, two) {
	return one + two;
};

const subtract = function(one, two) {
  return one - two;
};

const sum = function(nums) {
	return nums.reduce((v, n) => v + n, 0);
};

const multiply = function(nums) {
  return nums.reduce((v, n) => v * n, 1);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	if (num < 2) {
    return 1;
  }
  return num * factorial(num - 1);
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
