import { PerimeterOfRightTriangle } from "./perimeter-of-right-triangle";

describe("PerimeterOfRightTriangle", () => {
  it("calculates the perimeter of a right triangle correctly", () => {
    const a = 3;
    const b = 4;
    const expectedPerimeter = 12;
    const perimeter = PerimeterOfRightTriangle(a, b);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when any leg is negative", () => {
    const a = 3;
    const b = -4;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfRightTriangle(a, b);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when any leg is 0", () => {
    const a = 3;
    const b = 0;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfRightTriangle(a, b);
    expect(perimeter).toBe(expectedPerimeter);
  });
});
