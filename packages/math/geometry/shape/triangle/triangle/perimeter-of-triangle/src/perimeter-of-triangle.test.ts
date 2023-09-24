import { PerimeterOfTriangle } from "./perimeter-of-triangle";

describe("PerimeterOfTriangle", () => {
  it("calculates the perimeter of a triangle correctly", () => {
    const a = 3;
    const b = 4;
    const c = 5;
    const expectedPerimeter = 12;
    const perimeter = PerimeterOfTriangle(a, b, c);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when any side is negative", () => {
    const a = 3;
    const b = -4;
    const c = 5;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfTriangle(a, b, c);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when any side is 0", () => {
    const a = 3;
    const b = 0;
    const c = 5;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfTriangle(a, b, c);
    expect(perimeter).toBe(expectedPerimeter);
  });
});
