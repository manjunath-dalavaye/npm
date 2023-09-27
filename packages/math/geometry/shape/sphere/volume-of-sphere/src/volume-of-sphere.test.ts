import { VolumeOfSphere } from "./volume-of-sphere";

describe("VolumeOfSphere", () => {
  it("should return 0 for negative radius", () => {
    expect(VolumeOfSphere(-5)).toBe(0);
  });

  it("should return the correct volume for positive radius", () => {
    expect(VolumeOfSphere(5)).toBeCloseTo(523.5987755982989);
    expect(VolumeOfSphere(2.5)).toBeCloseTo(65.44984694978736);
  });
});
