import { Cuboid } from "@ilihub/geometry";

const length = 10;
const width = 20;
const height = 30;

const cuboid = new Cuboid(length, width, height);

const lateralSurfaceArea = cuboid.lateralSurfaceArea();
console.log(lateralSurfaceArea); // 1800

const perimeter = cuboid.perimeter();
console.log(perimeter); // 240

const surfaceArea = cuboid.surfaceArea();
console.log(surfaceArea); // 2200

const totalSurfaceArea = cuboid.totalSurfaceArea();
console.log(totalSurfaceArea); // 2200

const volume = cuboid.volume();
console.log(volume); // 6000
