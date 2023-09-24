import { RightTriangle } from "./right-triangle";

describe("RightTriangle", () => {
  describe("area", () => {
    it("calculates the area of a right triangle correctly", () => {
      const base = 3;
      const height = 4;
      const expectedArea = 6;
      const triangle = new RightTriangle(base, height);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });

    it("returns 0 when any leg is negative", () => {
      const base = 3;
      const height = -4;
      const expectedArea = 0;
      const triangle = new RightTriangle(base, height);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });

    it("returns 0 when any leg is 0", () => {
      const base = 3;
      const height = 0;
      const expectedArea = 0;
      const triangle = new RightTriangle(base, height);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });
  });

  describe("perimeter", () => {
    it("calculates the perimeter of a right triangle correctly", () => {
      const base = 3;
      const height = 4;
      const expectedPerimeter = 12;
      const triangle = new RightTriangle(base, height);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });

    it("returns 0 when any leg is negative", () => {
      const base = 3;
      const height = -4;
      const expectedPerimeter = 0;
      const triangle = new RightTriangle(base, height);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });

    it("returns 0 when any leg is 0", () => {
      const base = 3;
      const height = 0;
      const expectedPerimeter = 0;
      const triangle = new RightTriangle(base, height);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });
  });
});
