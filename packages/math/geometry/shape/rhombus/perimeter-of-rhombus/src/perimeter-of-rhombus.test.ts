import { PerimeterOfRhombus } from "./perimeter-of-rhombus";

describe("PerimeterOfRhombus", () => {
  it("should return 0 for negative or zero side length", () => {
    expect(PerimeterOfRhombus(-5)).toBe(0);
    expect(PerimeterOfRhombus(0)).toBe(0);
  });

  it("should return the correct perimeter for positive side length", () => {
    expect(PerimeterOfRhombus(5)).toBe(20);
    expect(PerimeterOfRhombus(2.5)).toBe(10);
  });
});
