import { Kelvin } from "@ilihub/math";

const kelvin = new Kelvin(373.15);

const celcius = kelvin.toCelsius();
console.log(celcius); // 100

const fahrenheit = kelvin.toFahrenheit();
console.log(fahrenheit); // 212

const rankine = kelvin.toRankine();
console.log(rankine); // 671.67

const reaumur = kelvin.toReaumur();
console.log(reaumur); // 80
