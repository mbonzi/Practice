function toFahrenheit(celsius) {
  console.log ((celsius * (9/5)) + 32);
}
toFahrenheit(15);
toFahrenheit(22);
toFahrenheit(30);
toFahrenheit(35);
toFahrenheit(40);


function toCelsius(fahrenheit) {
  console.log ((fahrenheit - 32)*(5/9));
}
toCelsius(104);
toCelsius(95);
toCelsius(86);
toCelsius(71.6);
toCelsius(59);

let fromCelsius = c => (c * (9/5) +32);
console.log(fromCelsius(0));
console.log(fromCelsius(100));
