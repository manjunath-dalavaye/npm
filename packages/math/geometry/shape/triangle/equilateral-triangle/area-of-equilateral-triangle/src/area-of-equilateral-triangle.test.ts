import { AreaOfEquilateralTriangle } from "./area-of-equilateral-triangle";

describe("AreaOfEquilateralTriangle", () => {
  it("calculates the area of an equilateral triangle correctly", () => {
    const side = 3;
    const expectedArea = 3.8971143170299736;
    const area = AreaOfEquilateralTriangle(side);
    expect(area).toBeCloseTo(expectedArea);
  });

  it("returns 0 when the side length is negative", () => {
    const side = -3;
    const expectedArea = 0;
    const area = AreaOfEquilateralTriangle(side);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when the side length is 0", () => {
    const side = 0;
    const expectedArea = 0;
    const area = AreaOfEquilateralTriangle(side);
    expect(area).toBe(expectedArea);
  });
});
