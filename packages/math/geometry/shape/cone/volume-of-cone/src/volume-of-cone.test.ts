import { VolumeOfCone } from "./volume-of-cone";

describe("VolumeOfCone", () => {
  it("calculates the volume of a cone with positive dimensions", () => {
    expect(VolumeOfCone(5, 10)).toBeCloseTo(261.799);
  });

  it("returns 0 when the radius is 0", () => {
    expect(VolumeOfCone(0, 10)).toBe(0);
  });

  it("returns 0 when the height is 0", () => {
    expect(VolumeOfCone(5, 0)).toBe(0);
  });

  it("returns 0 when the radius and height are 0", () => {
    expect(VolumeOfCone(0, 0)).toBe(0);
  });

  it("returns 0 when the radius is negative", () => {
    expect(VolumeOfCone(-5, 10)).toBe(0);
  });

  it("returns 0 when the height is negative", () => {
    expect(VolumeOfCone(5, -10)).toBe(0);
  });

  it("returns 0 when the radius and height are negative", () => {
    expect(VolumeOfCone(-5, -10)).toBe(0);
  });
});
