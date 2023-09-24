import { ScaleneTriangle } from "@ilihub/math";

const s1 = 6;
const s2 = 5;
const s3 = 4;

const scaleneTriangle = new ScaleneTriangle(s1, s2, s3);

const area = scaleneTriangle.area();
console.log(area); // 9.921567416492215

const perimeter = scaleneTriangle.perimeter();
console.log(perimeter); // 15
