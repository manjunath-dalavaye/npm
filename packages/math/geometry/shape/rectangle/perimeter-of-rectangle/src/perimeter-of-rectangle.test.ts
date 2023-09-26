import { PerimeterOfRectangle } from "./perimeter-of-rectangle";

describe("PerimeterOfRectangle", () => {
  it("should return 0 for negative length and width", () => {
    expect(PerimeterOfRectangle(-5, -10)).toBe(0);
  });

  it("should return 0 for length or width of 0", () => {
    expect(PerimeterOfRectangle(0, 10)).toBe(0);
    expect(PerimeterOfRectangle(5, 0)).toBe(0);
  });

  it("should return the correct perimeter for positive length and width", () => {
    expect(PerimeterOfRectangle(5, 10)).toBe(30);
    expect(PerimeterOfRectangle(2.5, 5)).toBe(15);
  });
});
