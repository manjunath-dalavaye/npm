import { Cylinder } from "@ilihub/code";

const radius = 5;
const height = 10;

const cylinder = new Cylinder(radius, height);

const lateralSurfaceArea = cylinder.lateralSurfaceArea();
console.log(lateralSurfaceArea); // 314.1592653589793

const totalSurfaceArea = cylinder.totalSurfaceArea();
console.log(totalSurfaceArea); // 471.23889803846896

const volume = cylinder.volume();
console.log(volume); // 785.3981633974483
