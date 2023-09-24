import { Circle } from "@ilihub/circle";

const radius = 10;

const circle = new Circle(radius);

const area = circle.area();
console.log(area); // 314.1592653589793

const circumference = circle.circumference();
console.log(circumference); // 62.83185307179586
