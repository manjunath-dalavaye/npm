import { AreaOfSquare } from "./area-of-square";

describe("AreaOfSquare", () => {
  it("should return 0 for negative side length", () => {
    expect(AreaOfSquare(-5)).toBe(0);
  });

  it("should return 0 for side length of 0", () => {
    expect(AreaOfSquare(0)).toBe(0);
  });

  it("should return the correct area for positive side length", () => {
    expect(AreaOfSquare(5)).toBe(25);
    expect(AreaOfSquare(10)).toBe(100);
    expect(AreaOfSquare(2.5)).toBe(6.25);
  });
});
