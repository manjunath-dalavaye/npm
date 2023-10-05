import { LateralSurfaceAreaOfCuboid } from "@ilihub/geometry";

const length = 10;
const width = 20;
const height = 30;

const lateralSurfaceArea = LateralSurfaceAreaOfCuboid(length, width, height);
console.log(lateralSurfaceArea); // 1800
