import { AreaOfSemiCircle } from "./area-of-semi-circle";

describe("AreaOfSemiCircle", () => {
  it("calculates the area of a semi-circle correctly", () => {
    const radius = 5;
    const expectedArea = 39.269908169872416;
    const area = AreaOfSemiCircle(radius);
    expect(area).toBeCloseTo(expectedArea);
  });

  it("returns 0 when the radius is negative", () => {
    const radius = -5;
    const expectedArea = 0;
    const area = AreaOfSemiCircle(radius);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when the radius is 0", () => {
    const radius = 0;
    const expectedArea = 0;
    const area = AreaOfSemiCircle(radius);
    expect(area).toBe(expectedArea);
  });
});
