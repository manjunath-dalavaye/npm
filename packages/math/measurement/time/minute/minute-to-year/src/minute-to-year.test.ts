import { MinuteToYear, MinutesToYears } from "./minute-to-year";

describe("MinuteToYear", () => {
  it("should convert 525600 minutes to 1 year", () => {
    const minutes = 525600;
    const expectedYears = 1;
    const actualYears = MinuteToYear(minutes);
    expect(actualYears).toBe(expectedYears);
  });

  it("should convert 1051200 minutes to 2 years", () => {
    const minutes = 1051200;
    const expectedYears = 2;
    const actualYears = MinuteToYear(minutes);
    expect(actualYears).toBe(expectedYears);
  });
});

describe("MinutesToYears", () => {
  it("should be an alias for MinuteToYear", () => {
    expect(MinutesToYears).toBe(MinuteToYear);
  });
});
