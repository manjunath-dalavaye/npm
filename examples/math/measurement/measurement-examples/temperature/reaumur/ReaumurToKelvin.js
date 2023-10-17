import { ReaumurToKelvin } from "@ilihub/measurement";

const reaumur = 80;

const kelvin = ReaumurToKelvin(reaumur);
console.log(kelvin); // 373.15
