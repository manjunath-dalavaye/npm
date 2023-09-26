import { Rectangle } from "./rectangle";

describe("Rectangle", () => {
  describe("area", () => {
    it("should return 0 for negative length and width", () => {
      const rectangle = new Rectangle(-5, -10);
      expect(rectangle.area()).toBe(0);
    });

    it("should return 0 for length or width of 0", () => {
      const rectangle = new Rectangle(0, 10);
      expect(rectangle.area()).toBe(0);
    });

    it("should return the correct area for positive length and width", () => {
      const rectangle = new Rectangle(5, 10);
      expect(rectangle.area()).toBe(50);
    });
  });

  describe("perimeter", () => {
    it("should return 0 for negative length and width", () => {
      const rectangle = new Rectangle(-5, -10);
      expect(rectangle.perimeter()).toBe(0);
    });

    it("should return 0 for length or width of 0", () => {
      const rectangle = new Rectangle(0, 10);
      expect(rectangle.perimeter()).toBe(0);
    });

    it("should return the correct perimeter for positive length and width", () => {
      const rectangle = new Rectangle(5, 10);
      expect(rectangle.perimeter()).toBe(30);
    });
  });
});
