import { PerimeterOfEquilateralTriangle } from "./perimeter-of-equilateral-triangle";

describe("PerimeterOfEquilateralTriangle", () => {
  it("calculates the perimeter of an equilateral triangle correctly", () => {
    const side = 3;
    const expectedPerimeter = 9;
    const perimeter = PerimeterOfEquilateralTriangle(side);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when the side length is negative", () => {
    const side = -3;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfEquilateralTriangle(side);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when the side length is 0", () => {
    const side = 0;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfEquilateralTriangle(side);
    expect(perimeter).toBe(expectedPerimeter);
  });
});
