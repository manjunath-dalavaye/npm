import { AreaOfRightTriangle } from "./area-of-right-triangle";

describe("AreaOfRightTriangle", () => {
  it("calculates the area of a right triangle correctly", () => {
    const a = 3;
    const b = 4;
    const expectedArea = 6;
    const area = AreaOfRightTriangle(a, b);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when any leg is negative", () => {
    const a = 3;
    const b = -4;
    const expectedArea = 0;
    const area = AreaOfRightTriangle(a, b);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when any leg is 0", () => {
    const a = 3;
    const b = 0;
    const expectedArea = 0;
    const area = AreaOfRightTriangle(a, b);
    expect(area).toBe(expectedArea);
  });
});
