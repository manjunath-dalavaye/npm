import { PerimeterOfCuboid } from "./perimeter-of-cuboid";

describe("PerimeterOfCuboid", () => {
  it("calculates the perimeter of a cuboid with positive dimensions", () => {
    expect(PerimeterOfCuboid(5, 3, 2)).toBe(40);
  });

  it("calculates the perimeter of a cuboid with all sides equal", () => {
    expect(PerimeterOfCuboid(2, 2, 2)).toBe(24);
  });

  it("returns 0 when any dimension is 0", () => {
    expect(PerimeterOfCuboid(5, 0, 2)).toBe(0);
  });

  it("returns 0 when any dimension is negative", () => {
    expect(PerimeterOfCuboid(-5, 3, 2)).toBe(0);
  });
});
