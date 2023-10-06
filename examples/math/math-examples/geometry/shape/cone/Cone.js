import { Cone } from "@ilihub/math";

const radius = 5;
const slantHeight = 13;
const height = 13;

const cone = new Cone(radius, slantHeight, height);

const curvedSurfaceArea = cone.curvedSurfaceArea();
console.log(curvedSurfaceArea); // 204.20352248333654

const totalSurfaceArea = cone.totalSurfaceArea();
console.log(totalSurfaceArea); // 282.7433388230814

const volume = cone.volume();
console.log(volume); // 340.3392041388942
