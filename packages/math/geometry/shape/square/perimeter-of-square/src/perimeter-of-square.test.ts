import { PerimeterOfSquare } from "./perimeter-of-square";

describe("PerimeterOfSquare", () => {
  it("should return 0 for negative side length", () => {
    expect(PerimeterOfSquare(-5)).toBe(0);
  });

  it("should return 0 for side length of 0", () => {
    expect(PerimeterOfSquare(0)).toBe(0);
  });

  it("should return the correct perimeter for positive side length", () => {
    expect(PerimeterOfSquare(5)).toBe(20);
    expect(PerimeterOfSquare(10)).toBe(40);
    expect(PerimeterOfSquare(2.5)).toBe(10);
  });
});
