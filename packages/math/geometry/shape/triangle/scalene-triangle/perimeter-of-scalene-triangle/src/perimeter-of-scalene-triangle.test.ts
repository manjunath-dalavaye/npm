import { PerimeterOfScaleneTriangle } from "./perimeter-of-scalene-triangle";

describe("PerimeterOfScaleneTriangle", () => {
  it("calculates the perimeter of a scalene triangle correctly", () => {
    const a = 3;
    const b = 4;
    const c = 5;
    const expectedPerimeter = 12;
    const perimeter = PerimeterOfScaleneTriangle(a, b, c);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when the side lengths are invalid", () => {
    const a = 1;
    const b = 2;
    const c = 3;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfScaleneTriangle(a, b, c);
    expect(perimeter).toBe(expectedPerimeter);
  });
});
