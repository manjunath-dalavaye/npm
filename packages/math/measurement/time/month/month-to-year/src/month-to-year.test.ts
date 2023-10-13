import { MonthToYear, MonthsToYears } from "./month-to-year";

describe("MonthToYear", () => {
  it("should convert 12 months to 1 year", () => {
    const months = 12;
    const expectedYears = 1;
    const actualYears = MonthToYear(months);
    expect(actualYears).toBe(expectedYears);
  });

  it("should convert 24 months to 2 years", () => {
    const months = 24;
    const expectedYears = 2;
    const actualYears = MonthToYear(months);
    expect(actualYears).toBe(expectedYears);
  });
});

describe("MonthsToYears", () => {
  it("should be an alias for MonthToYear", () => {
    expect(MonthsToYears).toBe(MonthToYear);
  });
});
