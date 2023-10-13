import { DayToYear, DaysToYears } from "./day-to-year";

describe("DayToYear", () => {
  it("should convert 365 days to 1 year", () => {
    const days = 365;
    const expectedYears = 1;
    const actualYears = DayToYear(days);
    expect(actualYears).toBe(expectedYears);
  });

  it("should convert 730 days to 2 years", () => {
    const days = 730;
    const expectedYears = 2;
    const actualYears = DayToYear(days);
    expect(actualYears).toBe(expectedYears);
  });
});

describe("DaysToYears", () => {
  it("should be an alias for DayToYear", () => {
    expect(DaysToYears).toBe(DayToYear);
  });
});
