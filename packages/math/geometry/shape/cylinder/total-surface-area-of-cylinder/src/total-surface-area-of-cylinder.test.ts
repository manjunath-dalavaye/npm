import { TotalSurfaceAreaOfCylinder } from "./total-surface-area-of-cylinder";

describe("TotalSurfaceAreaOfCylinder", () => {
  it("calculates the total surface area of a cylinder with positive dimensions", () => {
    expect(TotalSurfaceAreaOfCylinder(5, 10)).toBeCloseTo(471.239);
  });

  it("returns 0 when the radius is 0", () => {
    expect(TotalSurfaceAreaOfCylinder(0, 10)).toBe(0);
  });

  it("returns 0 when the height is 0", () => {
    expect(TotalSurfaceAreaOfCylinder(5, 0)).toBe(0);
  });

  it("returns 0 when the radius and height are 0", () => {
    expect(TotalSurfaceAreaOfCylinder(0, 0)).toBe(0);
  });

  it("returns 0 when the radius is negative", () => {
    expect(TotalSurfaceAreaOfCylinder(-5, 10)).toBe(0);
  });

  it("returns 0 when the height is negative", () => {
    expect(TotalSurfaceAreaOfCylinder(5, -10)).toBe(0);
  });

  it("returns 0 when the radius and height are negative", () => {
    expect(TotalSurfaceAreaOfCylinder(-5, -10)).toBe(0);
  });
});
