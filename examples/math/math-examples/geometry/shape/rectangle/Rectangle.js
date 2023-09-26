import { Rectangle } from "@ilihub/math";

const length = 10;
const width = 20;

const rectangle = new Rectangle(length, width);

const area = rectangle.area();
console.log(area); // 200

const perimeter = rectangle.perimeter();
console.log(perimeter); // 60
