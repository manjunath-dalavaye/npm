import { CelsiusToReaumur } from "@ilihub/measurement";

const celcius = 100;

const reaumur = CelsiusToReaumur(celcius);
console.log(reaumur); // 80
