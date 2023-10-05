import { TotalSurfaceAreaOfCuboid } from "./total-surface-area-of-cuboid";

describe("TotalSurfaceAreaOfCuboid", () => {
  it("calculates the total surface area of a cuboid with positive dimensions", () => {
    expect(TotalSurfaceAreaOfCuboid(5, 3, 2)).toBe(62);
  });

  it("calculates the total surface area of a cuboid with all sides equal", () => {
    expect(TotalSurfaceAreaOfCuboid(2, 2, 2)).toBe(24);
  });

  it("returns 0 when any dimension is 0", () => {
    expect(TotalSurfaceAreaOfCuboid(5, 0, 2)).toBe(0);
  });

  it("returns 0 when any dimension is negative", () => {
    expect(TotalSurfaceAreaOfCuboid(-5, 3, 2)).toBe(0);
  });
});
