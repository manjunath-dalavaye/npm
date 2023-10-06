import { CurvedSurfaceAreaOfCone } from "@ilihub/geometry";

const radius = 5;
const slantHeight = 13;

const curvedSurfaceArea = CurvedSurfaceAreaOfCone(radius, slantHeight);
console.log(curvedSurfaceArea); // 204.20352248333654
