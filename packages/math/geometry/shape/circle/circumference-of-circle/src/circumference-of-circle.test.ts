import { CircumferenceOfCircle } from "./circumference-of-circle";

describe("CircumferenceOfCircle", () => {
  it("calculates the circumference of a circle correctly", () => {
    const radius = 5;
    const expectedCircumference = 31.41592653589793;
    const circumference = CircumferenceOfCircle(radius);
    expect(circumference).toBeCloseTo(expectedCircumference);
  });

  it("returns 0 when the radius is negative", () => {
    const radius = -5;
    const expectedCircumference = 0;
    const circumference = CircumferenceOfCircle(radius);
    expect(circumference).toBe(expectedCircumference);
  });

  it("returns 0 when the radius is 0", () => {
    const radius = 0;
    const expectedCircumference = 0;
    const circumference = CircumferenceOfCircle(radius);
    expect(circumference).toBe(expectedCircumference);
  });
});
