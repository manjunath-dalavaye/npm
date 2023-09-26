import { PerimeterOfParallelogram } from "./perimeter-of-parallelogram";

describe("PerimeterOfParallelogram", () => {
  it("should return 0 for negative base and side length", () => {
    expect(PerimeterOfParallelogram(-5, -10)).toBe(0);
  });

  it("should return 0 for base or side length of 0", () => {
    expect(PerimeterOfParallelogram(0, 10)).toBe(0);
    expect(PerimeterOfParallelogram(5, 0)).toBe(0);
  });

  it("should return the correct perimeter for positive base and side length", () => {
    expect(PerimeterOfParallelogram(5, 10)).toBe(30);
    expect(PerimeterOfParallelogram(2.5, 5)).toBe(15);
  });
});
