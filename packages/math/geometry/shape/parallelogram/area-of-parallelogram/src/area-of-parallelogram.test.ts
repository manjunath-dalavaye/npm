import { AreaOfParallelogram } from "./area-of-parallelogram";

describe("AreaOfParallelogram", () => {
  it("should return 0 for negative base and height", () => {
    expect(AreaOfParallelogram(-5, -10)).toBe(0);
  });

  it("should return 0 for base or height of 0", () => {
    expect(AreaOfParallelogram(0, 10)).toBe(0);
    expect(AreaOfParallelogram(5, 0)).toBe(0);
  });

  it("should return the correct area for positive base and height", () => {
    expect(AreaOfParallelogram(5, 10)).toBe(50);
    expect(AreaOfParallelogram(2.5, 5)).toBe(12.5);
  });
});
