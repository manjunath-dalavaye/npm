import { Square } from "./square";

describe("Square", () => {
  describe("area", () => {
    it("should return 0 for negative side length", () => {
      const square = new Square(-5);
      expect(square.area()).toBe(0);
    });

    it("should return 0 for side length of 0", () => {
      const square = new Square(0);
      expect(square.area()).toBe(0);
    });

    it("should return the correct area for positive side length", () => {
      const square = new Square(5);
      expect(square.area()).toBe(25);
    });
  });

  describe("perimeter", () => {
    it("should return 0 for negative side length", () => {
      const square = new Square(-5);
      expect(square.perimeter()).toBe(0);
    });

    it("should return 0 for side length of 0", () => {
      const square = new Square(0);
      expect(square.perimeter()).toBe(0);
    });

    it("should return the correct perimeter for positive side length", () => {
      const square = new Square(5);
      expect(square.perimeter()).toBe(20);
    });
  });
});
