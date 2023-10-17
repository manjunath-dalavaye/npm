import { KelvinToReaumur } from "@ilihub/measurement";

const kelvin = 373.15;

const reaumur = KelvinToReaumur(kelvin);
console.log(reaumur); // 80
