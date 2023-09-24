import { EquilateralTriangle } from "@ilihub/shape";

const side = 5;
const equilateralTriangle = new EquilateralTriangle(side);

const area = equilateralTriangle.area();
console.log(area); // 10.825317547305481

const perimeter = equilateralTriangle.perimeter();
console.log(perimeter); // 15
