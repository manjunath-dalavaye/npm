import { AreaOfRectangle } from "./area-of-rectangle";

describe("AreaOfRectangle", () => {
  it("should return 0 for negative length and width", () => {
    expect(AreaOfRectangle(-5, -10)).toBe(0);
  });

  it("should return 0 for length or width of 0", () => {
    expect(AreaOfRectangle(0, 10)).toBe(0);
    expect(AreaOfRectangle(5, 0)).toBe(0);
  });

  it("should return the correct area for positive length and width", () => {
    expect(AreaOfRectangle(5, 10)).toBe(50);
    expect(AreaOfRectangle(2.5, 5)).toBe(12.5);
  });
});
