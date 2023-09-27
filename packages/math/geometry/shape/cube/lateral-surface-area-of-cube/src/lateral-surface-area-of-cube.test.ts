import { LateralSurfaceAreaOfCube } from "./lateral-surface-area-of-cube";

describe("LateralSurfaceAreaOfCube", () => {
  it("should return 0 for negative or zero side length", () => {
    expect(LateralSurfaceAreaOfCube(-5)).toBe(0);
    expect(LateralSurfaceAreaOfCube(0)).toBe(0);
  });

  it("should return the correct lateral surface area for positive side length", () => {
    expect(LateralSurfaceAreaOfCube(5)).toBe(100);
    expect(LateralSurfaceAreaOfCube(2.5)).toBeCloseTo(25);
  });
});
