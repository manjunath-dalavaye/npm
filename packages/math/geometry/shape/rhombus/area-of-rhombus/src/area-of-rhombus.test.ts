import { AreaOfRhombus } from "./area-of-rhombus";

describe("AreaOfRhombus", () => {
  it("should return 0 for negative or zero diagonals", () => {
    expect(AreaOfRhombus(-5, 10)).toBe(0);
    expect(AreaOfRhombus(5, 0)).toBe(0);
    expect(AreaOfRhombus(0, 10)).toBe(0);
  });

  it("should return the correct area for positive diagonals", () => {
    expect(AreaOfRhombus(5, 10)).toBe(25);
    expect(AreaOfRhombus(2.5, 5)).toBe(6.25);
  });
});
