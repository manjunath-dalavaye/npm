import { SemiCircle } from "@ilihub/math";

const radius = 5;

const semiCircle = new SemiCircle(radius);

const area = semiCircle.area();
console.log(area); // 39.269908169872416

const perimeter = semiCircle.perimeter();
console.log(perimeter); // 25.707963267948966
