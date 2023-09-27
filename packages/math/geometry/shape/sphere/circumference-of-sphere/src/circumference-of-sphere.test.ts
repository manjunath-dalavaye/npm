import { CircumferenceOfSphere } from "./circumference-of-sphere";

describe("CircumferenceOfSphere", () => {
  it("should return 0 for negative or zero radius", () => {
    expect(CircumferenceOfSphere(-5)).toBe(0);
    expect(CircumferenceOfSphere(0)).toBe(0);
  });

  it("should return the correct circumference for positive radius", () => {
    expect(CircumferenceOfSphere(5)).toBeCloseTo(31.41592653589793);
    expect(CircumferenceOfSphere(2.5)).toBeCloseTo(15.707963267948966);
  });
});
