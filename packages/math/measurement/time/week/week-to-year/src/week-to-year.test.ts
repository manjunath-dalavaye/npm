import { WeekToYear, WeeksToYears } from "./week-to-year";

describe("WeekToYear", () => {
  it("should convert 52 weeks to approximately 1 year", () => {
    const weeks = 52;
    const expectedYears = 1;
    const actualYears = WeekToYear(weeks);
    expect(actualYears).toBeCloseTo(expectedYears);
  });

  it("should convert 104 weeks to approximately 2 years", () => {
    const weeks = 104;
    const expectedYears = 2;
    const actualYears = WeekToYear(weeks);
    expect(actualYears).toBeCloseTo(expectedYears);
  });
});

describe("WeeksToYears", () => {
  it("should be an alias for WeekToYear", () => {
    expect(WeeksToYears).toBe(WeekToYear);
  });
});
