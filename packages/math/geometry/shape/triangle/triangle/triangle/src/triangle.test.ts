import { AreaOfTriangle } from "@ilihub/area-of-triangle";
import { PerimeterOfTriangle } from "@ilihub/perimeter-of-triangle";
import { Triangle } from "./triangle";

jest.mock("@ilihub/area-of-triangle");
jest.mock("@ilihub/perimeter-of-triangle");

describe("Triangle", () => {
  describe("area", () => {
    it("calculates the area of a valid triangle correctly", () => {
      const s1 = 3;
      const s2 = 4;
      const s3 = 5;
      const expectedArea = 6;
      (AreaOfTriangle as jest.Mock).mockReturnValue(expectedArea);
      const triangle = new Triangle(s1, s2, s3);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
      expect(AreaOfTriangle).toHaveBeenCalledWith(s1, s2, s3);
    });

    it("returns 0 when any side is negative", () => {
      const s1 = 3;
      const s2 = -4;
      const s3 = 5;
      const expectedArea = 0;
      (AreaOfTriangle as jest.Mock).mockReturnValue(expectedArea);
      const triangle = new Triangle(s1, s2, s3);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
      expect(AreaOfTriangle).toHaveBeenCalledWith(s1, s2, s3);
    });

    it("returns 0 when any side is 0", () => {
      const s1 = 3;
      const s2 = 0;
      const s3 = 5;
      const expectedArea = 0;
      (AreaOfTriangle as jest.Mock).mockReturnValue(expectedArea);
      const triangle = new Triangle(s1, s2, s3);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
      expect(AreaOfTriangle).toHaveBeenCalledWith(s1, s2, s3);
    });

    it("returns 0 when the sides do not form a valid triangle", () => {
      const s1 = 3;
      const s2 = 4;
      const s3 = 8;
      const expectedArea = 0;
      (AreaOfTriangle as jest.Mock).mockReturnValue(expectedArea);
      const triangle = new Triangle(s1, s2, s3);
      const area = triangle.area();
      expect(area).toBe(expectedArea);
      expect(AreaOfTriangle).toHaveBeenCalledWith(s1, s2, s3);
    });
  });

  describe("perimeter", () => {
    it("calculates the perimeter of a triangle correctly", () => {
      const s1 = 3;
      const s2 = 4;
      const s3 = 5;
      const expectedPerimeter = 12;
      (PerimeterOfTriangle as jest.Mock).mockReturnValue(expectedPerimeter);
      const triangle = new Triangle(s1, s2, s3);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
      expect(PerimeterOfTriangle).toHaveBeenCalledWith(s1, s2, s3);
    });

    it("returns 0 when any side is negative", () => {
      const s1 = 3;
      const s2 = -4;
      const s3 = 5;
      const expectedPerimeter = 0;
      (PerimeterOfTriangle as jest.Mock).mockReturnValue(expectedPerimeter);
      const triangle = new Triangle(s1, s2, s3);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
      expect(PerimeterOfTriangle).toHaveBeenCalledWith(s1, s2, s3);
    });

    it("returns 0 when any side is 0", () => {
      const s1 = 3;
      const s2 = 0;
      const s3 = 5;
      const expectedPerimeter = 0;
      (PerimeterOfTriangle as jest.Mock).mockReturnValue(expectedPerimeter);
      const triangle = new Triangle(s1, s2, s3);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
      expect(PerimeterOfTriangle).toHaveBeenCalledWith(s1, s2, s3);
    });

    it("returns 0 when the sides do not form a valid triangle", () => {
      const s1 = 3;
      const s2 = 4;
      const s3 = 8;
      const expectedPerimeter = 0;
      (PerimeterOfTriangle as jest.Mock).mockReturnValue(expectedPerimeter);
      const triangle = new Triangle(s1, s2, s3);
      const perimeter = triangle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
      expect(PerimeterOfTriangle).toHaveBeenCalledWith(s1, s2, s3);
    });
  });
});
