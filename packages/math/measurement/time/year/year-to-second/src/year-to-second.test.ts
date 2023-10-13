import { YearToSecond, YearsToSeconds } from "./year-to-second";

describe("YearToSecond", () => {
  it("should convert 1 year to 31,536,000 seconds", () => {
    const years = 1;
    const expectedSeconds = 31536000;
    const actualSeconds = YearToSecond(years);
    expect(actualSeconds).toBe(expectedSeconds);
  });

  it("should convert 2 years to 63,072,000 seconds", () => {
    const years = 2;
    const expectedSeconds = 63072000;
    const actualSeconds = YearToSecond(years);
    expect(actualSeconds).toBe(expectedSeconds);
  });
});

describe("YearsToSeconds", () => {
  it("should be an alias for YearToSecond", () => {
    expect(YearsToSeconds).toBe(YearToSecond);
  });
});
