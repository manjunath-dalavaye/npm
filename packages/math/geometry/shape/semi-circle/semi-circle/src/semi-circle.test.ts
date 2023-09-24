import { SemiCircle } from "./semi-circle";

describe("SemiCircle", () => {
  describe("area", () => {
    it("calculates the area of a semi-circle correctly", () => {
      const radius = 5;
      const semiCircle = new SemiCircle(radius);
      const expectedArea = 39.269908169872416;
      const area = semiCircle.area();
      expect(area).toBeCloseTo(expectedArea);
    });

    it("returns 0 when the radius is negative", () => {
      const radius = -5;
      const semiCircle = new SemiCircle(radius);
      const expectedArea = 0;
      const area = semiCircle.area();
      expect(area).toBe(expectedArea);
    });

    it("returns 0 when the radius is 0", () => {
      const radius = 0;
      const semiCircle = new SemiCircle(radius);
      const expectedArea = 0;
      const area = semiCircle.area();
      expect(area).toBe(expectedArea);
    });
  });

  describe("perimeter", () => {
    it("calculates the perimeter of a semi-circle correctly", () => {
      const radius = 5;
      const semiCircle = new SemiCircle(radius);
      const expectedPerimeter = 25.707963267948966;
      const perimeter = semiCircle.perimeter();
      expect(perimeter).toBeCloseTo(expectedPerimeter);
    });

    it("returns 0 when the radius is negative", () => {
      const radius = -5;
      const semiCircle = new SemiCircle(radius);
      const expectedPerimeter = 0;
      const perimeter = semiCircle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });

    it("returns 0 when the radius is 0", () => {
      const radius = 0;
      const semiCircle = new SemiCircle(radius);
      const expectedPerimeter = 0;
      const perimeter = semiCircle.perimeter();
      expect(perimeter).toBe(expectedPerimeter);
    });
  });
});
