import { Fahrenheit } from "@ilihub/measurement";

const fahrenheit = new Fahrenheit(212);

const celsius = fahrenheit.toCelsius();
console.log(celsius); // 100

const kelvin = fahrenheit.toKelvin();
console.log(kelvin); // 373.15

const reaumur = fahrenheit.toReaumur();
console.log(reaumur); // 80

const rankine = fahrenheit.toRankine();
console.log(rankine); // 671.67
