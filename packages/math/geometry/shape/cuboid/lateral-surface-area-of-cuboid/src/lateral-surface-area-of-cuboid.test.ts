import { LateralSurfaceAreaOfCuboid } from "./lateral-surface-area-of-cuboid";

describe("LateralSurfaceAreaOfCuboid", () => {
  it("calculates the lateral surface area of a cuboid with positive dimensions", () => {
    expect(LateralSurfaceAreaOfCuboid(5, 3, 2)).toBe(32);
  });

  it("calculates the lateral surface area of a cuboid with all sides equal", () => {
    expect(LateralSurfaceAreaOfCuboid(2, 2, 2)).toBe(16);
  });

  it("returns 0 when any dimension is 0", () => {
    expect(LateralSurfaceAreaOfCuboid(5, 0, 2)).toBe(0);
  });

  it("returns 0 when any dimension is negative", () => {
    expect(LateralSurfaceAreaOfCuboid(-5, 3, 2)).toBe(0);
  });
});
