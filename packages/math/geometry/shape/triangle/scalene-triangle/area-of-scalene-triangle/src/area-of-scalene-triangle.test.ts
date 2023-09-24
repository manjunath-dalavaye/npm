import { AreaOfScaleneTriangle } from "./area-of-scalene-triangle";

describe("AreaOfScaleneTriangle", () => {
  it("calculates the area of a scalene triangle correctly", () => {
    const a = 3;
    const b = 4;
    const c = 5;
    const expectedArea = 6;
    const area = AreaOfScaleneTriangle(a, b, c);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when the side lengths are invalid", () => {
    const a = 1;
    const b = 2;
    const c = 3;
    const expectedArea = 0;
    const area = AreaOfScaleneTriangle(a, b, c);
    expect(area).toBe(expectedArea);
  });
});
