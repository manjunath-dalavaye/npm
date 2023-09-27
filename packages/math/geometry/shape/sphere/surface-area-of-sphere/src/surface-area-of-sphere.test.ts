import { SurfaceAreaOfSphere } from "./surface-area-of-sphere";

describe("SurfaceAreaOfSphere", () => {
  it("should return 0 for negative or zero radius", () => {
    expect(SurfaceAreaOfSphere(-5)).toBe(0);
    expect(SurfaceAreaOfSphere(0)).toBe(0);
  });

  it("should return the correct surface area for positive radius", () => {
    expect(SurfaceAreaOfSphere(5)).toBeCloseTo(314.1592653589793);
    expect(SurfaceAreaOfSphere(2.5)).toBeCloseTo(78.53981633974483);
  });
});
