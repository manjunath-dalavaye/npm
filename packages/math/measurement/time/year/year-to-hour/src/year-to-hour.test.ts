import { YearToHour, YearsToHours } from "./year-to-hour";

describe("YearToHour", () => {
  it("should convert 1 year to 8,760 hours", () => {
    const years = 1;
    const expectedHours = 8760;
    const actualHours = YearToHour(years);
    expect(actualHours).toBe(expectedHours);
  });

  it("should convert 2 years to 17,520 hours", () => {
    const years = 2;
    const expectedHours = 17520;
    const actualHours = YearToHour(years);
    expect(actualHours).toBe(expectedHours);
  });
});

describe("YearsToHours", () => {
  it("should be an alias for YearToHour", () => {
    expect(YearsToHours).toBe(YearToHour);
  });
});
