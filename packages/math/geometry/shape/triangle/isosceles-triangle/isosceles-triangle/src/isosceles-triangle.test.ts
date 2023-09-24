import { IsoscelesTriangle } from "./isosceles-triangle";

describe("IsoscelesTriangle", () => {
  describe("area", () => {
    it("calculates the area of an isosceles triangle correctly", () => {
      const side = 3;
      const base = 4;
      const expectedArea = 4.47213595499958;
      const triangle = new IsoscelesTriangle(side, base);
      const area = triangle.area();
      expect(area).toBeCloseTo(expectedArea);
    });

    it("returns 0 when the side length is negative", () => {
      const side = -3;
      const base = 4;
      const expectedArea = 0;
      const triangle = new IsoscelesTriangle(side, base);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });

    it("returns 0 when the base length is negative", () => {
      const side = 3;
      const base = -4;
      const expectedArea = 0;
      const triangle = new IsoscelesTriangle(side, base);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });

    it("returns 0 when the side length is 0", () => {
      const side = 0;
      const base = 4;
      const expectedArea = 0;
      const triangle = new IsoscelesTriangle(side, base);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });

    it("returns 0 when the base length is 0", () => {
      const side = 3;
      const base = 0;
      const expectedArea = 0;
      const triangle = new IsoscelesTriangle(side, base);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });
  });

  describe("perimeter", () => {
    it("calculates the perimeter of an isosceles triangle correctly", () => {
      const side = 3;
      const base = 4;
      const expectedPerimeter = 10;
      const triangle = new IsoscelesTriangle(side, base);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });

    it("returns 0 when the side length is negative", () => {
      const side = -3;
      const base = 4;
      const expectedPerimeter = 0;
      const triangle = new IsoscelesTriangle(side, base);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });

    it("returns 0 when the base length is negative", () => {
      const side = 3;
      const base = -4;
      const expectedPerimeter = 0;
      const triangle = new IsoscelesTriangle(side, base);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });

    it("returns 0 when the side length is 0", () => {
      const side = 0;
      const base = 4;
      const expectedPerimeter = 0;
      const triangle = new IsoscelesTriangle(side, base);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });

    it("returns 0 when the base length is 0", () => {
      const side = 3;
      const base = 0;
      const expectedPerimeter = 0;
      const triangle = new IsoscelesTriangle(side, base);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });
  });
});
