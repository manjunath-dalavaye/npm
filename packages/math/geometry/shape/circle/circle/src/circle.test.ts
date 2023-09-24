import { Circle } from "./circle";

describe("Circle", () => {
  describe("area", () => {
    it("calculates the area of a circle correctly", () => {
      const radius = 5;
      const circle = new Circle(radius);
      const expectedArea = 78.53981633974483;
      const area = circle.area();
      expect(area).toBeCloseTo(expectedArea);
    });

    it("returns 0 when the radius is negative", () => {
      const radius = -5;
      const circle = new Circle(radius);
      const expectedArea = 0;
      const area = circle.area();
      expect(area).toBe(expectedArea);
    });

    it("returns 0 when the radius is 0", () => {
      const radius = 0;
      const circle = new Circle(radius);
      const expectedArea = 0;
      const area = circle.area();
      expect(area).toBe(expectedArea);
    });
  });

  describe("circumference", () => {
    it("calculates the circumference of a circle correctly", () => {
      const radius = 5;
      const circle = new Circle(radius);
      const expectedCircumference = 31.41592653589793;
      const circumference = circle.circumference();
      expect(circumference).toBeCloseTo(expectedCircumference);
    });

    it("returns 0 when the radius is negative", () => {
      const radius = -5;
      const circle = new Circle(radius);
      const expectedCircumference = 0;
      const circumference = circle.circumference();
      expect(circumference).toBe(expectedCircumference);
    });

    it("returns 0 when the radius is 0", () => {
      const radius = 0;
      const circle = new Circle(radius);
      const expectedCircumference = 0;
      const circumference = circle.circumference();
      expect(circumference).toBe(expectedCircumference);
    });
  });
});
