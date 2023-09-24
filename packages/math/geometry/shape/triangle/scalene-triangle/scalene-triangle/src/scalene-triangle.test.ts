import { ScaleneTriangle } from "./scalene-triangle";

describe("ScaleneTriangle", () => {
  describe("area", () => {
    it("calculates the area of a scalene triangle correctly", () => {
      const s1 = 3;
      const s2 = 4;
      const s3 = 5;
      const expectedArea = 6;
      const triangle = new ScaleneTriangle(s1, s2, s3);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });

    it("returns 0 when the side lengths are invalid", () => {
      const s1 = 1;
      const s2 = 2;
      const s3 = 3;
      const expectedArea = 0;
      const triangle = new ScaleneTriangle(s1, s2, s3);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
    });
  });

  describe("perimeter", () => {
    it("calculates the perimeter of a scalene triangle correctly", () => {
      const s1 = 3;
      const s2 = 4;
      const s3 = 5;
      const expectedPerimeter = 12;
      const triangle = new ScaleneTriangle(s1, s2, s3);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });

    it("returns 0 when the side lengths are invalid", () => {
      const s1 = 1;
      const s2 = 2;
      const s3 = 3;
      const expectedPerimeter = 0;
      const triangle = new ScaleneTriangle(s1, s2, s3);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });
  });
});
