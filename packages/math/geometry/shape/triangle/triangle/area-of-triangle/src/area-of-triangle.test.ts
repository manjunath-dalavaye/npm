import { AreaOfTriangle } from "./area-of-triangle";

describe("AreaOfTriangle", () => {
  it("calculates the area of a triangle correctly", () => {
    const a = 3;
    const b = 4;
    const c = 5;
    const expectedArea = 6;
    const area = AreaOfTriangle(a, b, c);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when any side is negative", () => {
    const a = 3;
    const b = -4;
    const c = 5;
    const expectedArea = 0;
    const area = AreaOfTriangle(a, b, c);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when any side is 0", () => {
    const a = 3;
    const b = 0;
    const c = 5;
    const expectedArea = 0;
    const area = AreaOfTriangle(a, b, c);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when the sides do not form a valid triangle", () => {
    const a = 3;
    const b = 4;
    const c = 8;
    const expectedArea = 0;
    const area = AreaOfTriangle(a, b, c);
    expect(area).toBe(expectedArea);
  });
});
