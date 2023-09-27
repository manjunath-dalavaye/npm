import { Cube } from "@ilihub/code";

const sideLength = 5;

const cube = new Cube(sideLength);

const diagonal = cube.diagonal();
console.log(diagonal); // 8.660254037844386

const lateralSurfaceArea = cube.lateralSurfaceArea();
console.log(lateralSurfaceArea); // 100

const totalSurfaceArea = cube.totalSurfaceArea();
console.log(totalSurfaceArea); // 150

const volume = cube.volume();
console.log(volume); // 125
