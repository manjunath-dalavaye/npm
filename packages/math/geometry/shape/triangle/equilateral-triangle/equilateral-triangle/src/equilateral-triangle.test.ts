import { EquilateralTriangle } from "./equilateral-triangle";

describe("EquilateralTriangle", () => {
  describe("area", () => {
    it("calculates the area of an equilateral triangle correctly", () => {
      const side = 3;
      const expectedArea = 3.8971143170299736;
      const triangle = new EquilateralTriangle(side);
      const area = triangle.area();
      expect(area).toBeCloseTo(expectedArea);
    });

    it("returns 0 when the side length is negative", () => {
      const side = -3;
      const expectedArea = 0;
      const triangle = new EquilateralTriangle(side);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });

    it("returns 0 when the side length is 0", () => {
      const side = 0;
      const expectedArea = 0;
      const triangle = new EquilateralTriangle(side);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });
  });

  describe("perimeter", () => {
    it("calculates the perimeter of an equilateral triangle correctly", () => {
      const side = 3;
      const expectedPerimeter = 9;
      const triangle = new EquilateralTriangle(side);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });

    it("returns 0 when the side length is negative", () => {
      const side = -3;
      const expectedPerimeter = 0;
      const triangle = new EquilateralTriangle(side);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });

    it("returns 0 when the side length is 0", () => {
      const side = 0;
      const expectedPerimeter = 0;
      const triangle = new EquilateralTriangle(side);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });
  });
});
