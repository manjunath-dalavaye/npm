import { TotalSurfaceAreaOfCone } from "./total-surface-area-of-cone";

describe("TotalSurfaceAreaOfCone", () => {
  it("calculates the total surface area of a cone with positive dimensions", () => {
    expect(TotalSurfaceAreaOfCone(5, 10)).toBeCloseTo(235.619);
  });

  it("returns 0 when the radius is 0", () => {
    expect(TotalSurfaceAreaOfCone(0, 10)).toBe(0);
  });

  it("returns 0 when the slant height is 0", () => {
    expect(TotalSurfaceAreaOfCone(5, 0)).toBe(0);
  });

  it("returns 0 when the radius and slant height are 0", () => {
    expect(TotalSurfaceAreaOfCone(0, 0)).toBe(0);
  });

  it("returns 0 when the radius is negative", () => {
    expect(TotalSurfaceAreaOfCone(-5, 10)).toBe(0);
  });

  it("returns 0 when the slant height is negative", () => {
    expect(TotalSurfaceAreaOfCone(5, -10)).toBe(0);
  });

  it("returns 0 when the radius and slant height are negative", () => {
    expect(TotalSurfaceAreaOfCone(-5, -10)).toBe(0);
  });
});
