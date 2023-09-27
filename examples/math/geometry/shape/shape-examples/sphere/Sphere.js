import { Sphere } from "@ilihub/shape";

const radius = 5;

const sphere = new Sphere(radius);

const circumference = sphere.circumference();
console.log(circumference); // 31.41592653589793

const surfaceArea = sphere.surfaceArea();
console.log(surfaceArea); // 314.1592653589793

const volume = sphere.volume();
console.log(volume); // 523.5987755982989
