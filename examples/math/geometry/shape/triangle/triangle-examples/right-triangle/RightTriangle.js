import { RightTriangle } from "@ilihub/triangle";

const base = 6;
const height = 5;

const rightTriangle = new RightTriangle(base, height);

const area = rightTriangle.area();
console.log(area); // 15

const perimeter = rightTriangle.perimeter();
console.log(perimeter); // 18.810249675906654
