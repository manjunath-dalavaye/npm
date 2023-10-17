import { ReaumurToKelvin } from "@ilihub/temperature";

const reaumur = 80;

const kelvin = ReaumurToKelvin(reaumur);
console.log(kelvin); // 373.15
