var weather = require("./weather");
var temperatureUnits = process.argv[2];
var zipcodes = process.argv.slice(3);

zipcodes.forEach(function(zipcode) {
  weather.getWeather(zipcode, temperatureUnits);
});

