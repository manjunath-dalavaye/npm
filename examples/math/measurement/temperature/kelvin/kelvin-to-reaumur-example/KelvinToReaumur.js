import { KelvinToReaumur } from "@ilihub/kelvin-to-reaumur";

const kelvin = 373.15;

const reaumur = KelvinToReaumur(kelvin);
console.log(reaumur); // 80
