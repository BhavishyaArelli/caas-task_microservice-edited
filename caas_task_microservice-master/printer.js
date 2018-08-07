// This method print current weather report
function printMessage(temperatureUnits, location, main, temperature) {
  var temperature = convertTemperature(temperature, temperatureUnits);
  var message = "Location: " + location + "\nCurrent Weather: " + main + "\nCurrent Temperature: " + temperature + "\n";
  console.log(message);
}

// Print out error messages
function printError(error) {
  console.error(error.message);
}

// Convert temperature to F or C
function convertTemperature(temperature, units) {
  var message = "";
  switch(units) {
    case 'F':
      temperature = (9/5) * temperature - 459.67;
      break;
    case 'C':
      temperature = temperature - 273.15;
      break;
  }
  message += temperature.toFixed(0) + '\u00B0' + units;
  return message;
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;
