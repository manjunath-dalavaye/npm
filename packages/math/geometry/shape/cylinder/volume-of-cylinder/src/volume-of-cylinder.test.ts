import { VolumeOfCylinder } from "./volume-of-cylinder";

describe("VolumeOfCylinder", () => {
  it("calculates the volume of a cylinder with positive dimensions", () => {
    expect(VolumeOfCylinder(5, 10)).toBeCloseTo(785.398);
  });

  it("returns 0 when the radius is 0", () => {
    expect(VolumeOfCylinder(0, 10)).toBe(0);
  });

  it("returns 0 when the height is 0", () => {
    expect(VolumeOfCylinder(5, 0)).toBe(0);
  });

  it("returns 0 when the radius and height are 0", () => {
    expect(VolumeOfCylinder(0, 0)).toBe(0);
  });

  it("returns 0 when the radius is negative", () => {
    expect(VolumeOfCylinder(-5, 10)).toBe(0);
  });

  it("returns 0 when the height is negative", () => {
    expect(VolumeOfCylinder(5, -10)).toBe(0);
  });

  it("returns 0 when the radius and height are negative", () => {
    expect(VolumeOfCylinder(-5, -10)).toBe(0);
  });
});
