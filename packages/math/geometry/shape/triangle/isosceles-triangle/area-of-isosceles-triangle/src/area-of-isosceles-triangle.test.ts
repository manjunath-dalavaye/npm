import { AreaOfIsoscelesTriangle } from "./area-of-isosceles-triangle";

describe("AreaOfIsoscelesTriangle", () => {
  it("calculates the area of an isosceles triangle correctly", () => {
    const side = 3;
    const base = 4;
    const expectedArea = 4.47213595499958;
    const area = AreaOfIsoscelesTriangle(side, base);
    expect(area).toBeCloseTo(expectedArea);
  });

  it("returns 0 when the side length is negative", () => {
    const side = -3;
    const base = 4;
    const expectedArea = 0;
    const area = AreaOfIsoscelesTriangle(side, base);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when the base length is negative", () => {
    const side = 3;
    const base = -4;
    const expectedArea = 0;
    const area = AreaOfIsoscelesTriangle(side, base);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when the side length is 0", () => {
    const side = 0;
    const base = 4;
    const expectedArea = 0;
    const area = AreaOfIsoscelesTriangle(side, base);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when the base length is 0", () => {
    const side = 3;
    const base = 0;
    const expectedArea = 0;
    const area = AreaOfIsoscelesTriangle(side, base);
    expect(area).toBe(expectedArea);
  });
});
