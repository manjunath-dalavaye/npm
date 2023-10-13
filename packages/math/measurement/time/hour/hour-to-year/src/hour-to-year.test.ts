import { HourToYear, HoursToYears } from "./hour-to-year";

describe("HourToYear", () => {
  it("should convert 8760 hours to 1 year", () => {
    const hours = 8760;
    const expectedYears = 1;
    const actualYears = HourToYear(hours);
    expect(actualYears).toBe(expectedYears);
  });

  it("should convert 17520 hours to 2 years", () => {
    const hours = 17520;
    const expectedYears = 2;
    const actualYears = HourToYear(hours);
    expect(actualYears).toBe(expectedYears);
  });
});

describe("HoursToYears", () => {
  it("should be an alias for HourToYear", () => {
    expect(HoursToYears).toBe(HourToYear);
  });
});
