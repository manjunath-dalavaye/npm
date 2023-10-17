import { Rankine } from "@ilihub/measurement";

const rankine = new Rankine(671.67);

const celsius = rankine.toCelsius();
console.log(celsius); // 100

const kelvin = rankine.toKelvin();
console.log(kelvin); // 373.15

const reaumur = rankine.toReaumur();
console.log(reaumur); // 80

const fahrenheit = rankine.toFahrenheit();
console.log(fahrenheit); // 212
