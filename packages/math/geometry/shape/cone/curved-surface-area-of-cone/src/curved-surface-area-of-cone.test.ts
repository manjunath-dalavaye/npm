import { CurvedSurfaceAreaOfCone } from "./curved-surface-area-of-cone";

describe("CurvedSurfaceAreaOfCone", () => {
  it("calculates the curved surface area of a cone with positive dimensions", () => {
    expect(CurvedSurfaceAreaOfCone(5, 10)).toBeCloseTo(157.079);
  });

  it("returns 0 when the radius is 0", () => {
    expect(CurvedSurfaceAreaOfCone(0, 10)).toBe(0);
  });

  it("returns 0 when the slant height is 0", () => {
    expect(CurvedSurfaceAreaOfCone(5, 0)).toBe(0);
  });

  it("returns 0 when the radius and slant height are 0", () => {
    expect(CurvedSurfaceAreaOfCone(0, 0)).toBe(0);
  });

  it("returns 0 when the radius is negative", () => {
    expect(CurvedSurfaceAreaOfCone(-5, 10)).toBe(0);
  });

  it("returns 0 when the slant height is negative", () => {
    expect(CurvedSurfaceAreaOfCone(5, -10)).toBe(0);
  });

  it("returns 0 when the radius and slant height are negative", () => {
    expect(CurvedSurfaceAreaOfCone(-5, -10)).toBe(0);
  });
});
