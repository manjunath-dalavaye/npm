import { VolumeOfCuboid } from "./volume-of-cuboid";

describe("VolumeOfCuboid", () => {
  it("calculates the volume of a cuboid with positive dimensions", () => {
    expect(VolumeOfCuboid(5, 3, 2)).toBe(30);
  });

  it("calculates the volume of a cuboid with all sides equal", () => {
    expect(VolumeOfCuboid(2, 2, 2)).toBe(8);
  });

  it("returns 0 when any dimension is 0", () => {
    expect(VolumeOfCuboid(5, 0, 2)).toBe(0);
  });

  it("returns 0 when any dimension is negative", () => {
    expect(VolumeOfCuboid(-5, 3, 2)).toBe(0);
  });
});
