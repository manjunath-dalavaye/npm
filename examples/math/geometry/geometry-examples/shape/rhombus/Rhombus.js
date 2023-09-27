import { Rhombus } from "@ilihub/geometry";

const rhombus = new Rhombus();

const area = rhombus.area(10, 20);
console.log(area); // 100

const perimeter = rhombus.perimeter(10);
console.log(perimeter); // 40
