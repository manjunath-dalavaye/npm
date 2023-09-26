import { Square } from "@ilihub/geometry";

const sideLength = 5;

const square = new Square(sideLength);

const area = square.area();
console.log(area); // 25

const perimeter = square.perimeter();
console.log(perimeter); // 20
