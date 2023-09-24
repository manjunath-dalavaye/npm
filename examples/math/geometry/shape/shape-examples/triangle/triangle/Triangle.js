import { Triangle } from "@ilihub/shape";

const s1 = 6;
const s2 = 5;
const s3 = 4;

const triangle = new Triangle(s1, s2, s3);

const area = triangle.area();
console.log(area); // 9.921567416492215

const perimeter = triangle.perimeter();
console.log(perimeter); // 15
