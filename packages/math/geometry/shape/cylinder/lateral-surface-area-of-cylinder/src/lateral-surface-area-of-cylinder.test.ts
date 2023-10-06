import { LateralSurfaceAreaOfCylinder } from "./lateral-surface-area-of-cylinder";

describe("LateralSurfaceAreaOfCylinder", () => {
  it("calculates the lateral surface area of a cylinder with positive dimensions", () => {
    expect(LateralSurfaceAreaOfCylinder(5, 10)).toBeCloseTo(314.159);
  });

  it("returns 0 when the radius is 0", () => {
    expect(LateralSurfaceAreaOfCylinder(0, 10)).toBe(0);
  });

  it("returns 0 when the height is 0", () => {
    expect(LateralSurfaceAreaOfCylinder(5, 0)).toBe(0);
  });

  it("returns 0 when the radius and height are 0", () => {
    expect(LateralSurfaceAreaOfCylinder(0, 0)).toBe(0);
  });

  it("returns 0 when the radius is negative", () => {
    expect(LateralSurfaceAreaOfCylinder(-5, 10)).toBe(0);
  });

  it("returns 0 when the height is negative", () => {
    expect(LateralSurfaceAreaOfCylinder(5, -10)).toBe(0);
  });

  it("returns 0 when the radius and height are negative", () => {
    expect(LateralSurfaceAreaOfCylinder(-5, -10)).toBe(0);
  });
});
