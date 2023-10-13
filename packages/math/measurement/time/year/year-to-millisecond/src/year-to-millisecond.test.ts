import { YearToMillisecond, YearsToMilliseconds } from "./year-to-millisecond";

describe("YearToMillisecond", () => {
  it("should convert 1 year to 31,536,000,000 milliseconds", () => {
    const years = 1;
    const expectedMilliseconds = 31536000000;
    const actualMilliseconds = YearToMillisecond(years);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert 2 years to 63,072,000,000 milliseconds", () => {
    const years = 2;
    const expectedMilliseconds = 63072000000;
    const actualMilliseconds = YearToMillisecond(years);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });
});

describe("YearsToMilliseconds", () => {
  it("should be an alias for YearToMillisecond", () => {
    expect(YearsToMilliseconds).toBe(YearToMillisecond);
  });
});
