import { Celsius } from "@ilihub/temperature";

const celsius = new Celsius(100);

const fahrenheit = celsius.toFahrenheit();
console.log(fahrenheit); // 212

const kelvin = celsius.toKelvin();
console.log(kelvin); // 373.15

const rankine = celsius.toRankine();
console.log(rankine); // 671.67

const reaumur = celsius.toReaumur();
console.log(reaumur); // 80
