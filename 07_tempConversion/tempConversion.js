const convertToCelsius = function(fahrenheitTemp) {
  celciusTemp = (fahrenheitTemp - 32) * (5/9);
  return roundToSingleDecimal(celciusTemp);
};

const convertToFahrenheit = function(celciusTemp) {
  fahrenheitTemp = celciusTemp * (9/5) + 32;
  return roundToSingleDecimal(fahrenheitTemp);
};

const roundToSingleDecimal = function(num){
  return Math.round(num * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
