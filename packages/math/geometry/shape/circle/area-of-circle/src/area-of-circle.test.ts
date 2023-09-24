import { AreaOfCircle } from "./area-of-circle";

describe("AreaOfCircle", () => {
  it("calculates the area of a circle correctly", () => {
    const radius = 5;
    const expectedArea = 78.53981633974483;
    const area = AreaOfCircle(radius);
    expect(area).toBeCloseTo(expectedArea);
  });

  it("returns 0 when the radius is negative", () => {
    const radius = -5;
    const expectedArea = 0;
    const area = AreaOfCircle(radius);
    expect(area).toBe(expectedArea);
  });

  it("returns 0 when the radius is 0", () => {
    const radius = 0;
    const expectedArea = 0;
    const area = AreaOfCircle(radius);
    expect(area).toBe(expectedArea);
  });
});
