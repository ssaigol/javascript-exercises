const convertToCelsius = function(temp) {
    let a = ((temp - 32)*(5/9));
    return Math.round(a*10)/10
};

const convertToFahrenheit = function(temp) {
  let b = (temp * (9/5) + 32);
  return Math.round(b*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
