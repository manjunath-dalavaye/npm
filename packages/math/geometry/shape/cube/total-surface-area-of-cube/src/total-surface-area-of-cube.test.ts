import { TotalSurfaceAreaOfCube } from "./total-surface-area-of-cube";

describe("TotalSurfaceAreaOfCube", () => {
  it("should return 0 for negative or zero side length", () => {
    expect(TotalSurfaceAreaOfCube(-5)).toBe(0);
    expect(TotalSurfaceAreaOfCube(0)).toBe(0);
  });

  it("should return the correct total surface area for positive side length", () => {
    expect(TotalSurfaceAreaOfCube(5)).toBe(150);
    expect(TotalSurfaceAreaOfCube(2.5)).toBeCloseTo(37.5);
  });
});
