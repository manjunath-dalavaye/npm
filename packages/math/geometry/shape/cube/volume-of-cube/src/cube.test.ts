import { VolumeOfCube } from "./cube";

describe("VolumeOfCube", () => {
  it("should return 0 for negative or zero side length", () => {
    expect(VolumeOfCube(-5)).toBe(0);
    expect(VolumeOfCube(0)).toBe(0);
  });

  it("should return the correct volume for positive side length", () => {
    expect(VolumeOfCube(5)).toBe(125);
    expect(VolumeOfCube(2.5)).toBeCloseTo(15.625);
  });
});
