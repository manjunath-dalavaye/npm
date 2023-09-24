import { PerimeterOfIsoscelesTriangle } from "./perimeter-of-isosceles-triangle";

describe("PerimeterOfIsoscelesTriangle", () => {
  it("calculates the perimeter of an isosceles triangle correctly", () => {
    const side = 3;
    const base = 4;
    const expectedPerimeter = 10;
    const perimeter = PerimeterOfIsoscelesTriangle(side, base);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when the side length is negative", () => {
    const side = -3;
    const base = 4;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfIsoscelesTriangle(side, base);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when the base length is negative", () => {
    const side = 3;
    const base = -4;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfIsoscelesTriangle(side, base);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when the side length is 0", () => {
    const side = 0;
    const base = 4;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfIsoscelesTriangle(side, base);
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("returns 0 when the base length is 0", () => {
    const side = 3;
    const base = 0;
    const expectedPerimeter = 0;
    const perimeter = PerimeterOfIsoscelesTriangle(side, base);
    expect(perimeter).toBe(expectedPerimeter);
  });
});
