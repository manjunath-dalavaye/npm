import { Reaumur } from "@ilihub/reaumur";

const reaumur = new Reaumur(80);

const celcius = reaumur.toCelsius();
console.log(celcius); // 100

const fahrenheit = reaumur.toFahrenheit();
console.log(fahrenheit); // 212

const rankine = reaumur.toRankine();
console.log(rankine); // 671.67

const kelvin = reaumur.toKelvin();
console.log(kelvin); // 373.15
