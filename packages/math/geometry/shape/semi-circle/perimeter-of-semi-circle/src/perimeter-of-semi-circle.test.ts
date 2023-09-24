import { PerimeterOfSemiCircle } from "./perimeter-of-semi-circle";

describe("PerimeterOfSemiCircle", () => {
  it("calculates the perimeter of a semi-circle correctly", () => {
    const radius = 5;
    const expectedPerimeter = 25.707963267948966;
    const perimeter = PerimeterOfSemiCircle(radius);
    expect(perimeter).toBeCloseTo(expectedPerimeter);
  });

  it("returns 0 when the radius is negative", () => {
    const radius = -5;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfSemiCircle(radius);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when the radius is 0", () => {
    const radius = 0;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfSemiCircle(radius);
    expect(perimeter).toBe(expectedPerimeter);
  });
});
