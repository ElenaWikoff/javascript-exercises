const convertToCelsius = function(temp) {
  const result = (temp - 32) * (5/9)
  return result % 1 === 0 ? Math.trunc(result) : Number(result.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  const result = temp * (9/5) + 32;
  return result % 1 === 0 ? Math.trunc(result) : Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
