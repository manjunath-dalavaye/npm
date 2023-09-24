import { IsoscelesTriangle } from "@ilihub/triangle";

const side = 5;
const base = 6;

const isoscelesTriangle = new IsoscelesTriangle(side, base);

const area = isoscelesTriangle.area();
console.log(area); // 12

const perimeter = isoscelesTriangle.perimeter();
console.log(perimeter); // 16
