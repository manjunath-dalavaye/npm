import { DiagonalOfCube } from "./diagonal-of-cube";

describe("DiagonalOfCube", () => {
  it("should return 0 for negative or zero side length", () => {
    expect(DiagonalOfCube(-5)).toBe(0);
    expect(DiagonalOfCube(0)).toBe(0);
  });

  it("should return the correct diagonal for positive side length", () => {
    expect(DiagonalOfCube(5)).toBeCloseTo(8.660254037844386);
    expect(DiagonalOfCube(2.5)).toBeCloseTo(4.330127018922193);
  });
});
