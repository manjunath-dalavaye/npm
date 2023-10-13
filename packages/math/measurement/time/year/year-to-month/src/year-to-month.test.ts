import { YearToMonth, YearsToMonths } from "./year-to-month";

describe("YearToMonth", () => {
  it("should convert 1 year to 12 months", () => {
    const years = 1;
    const expectedMonths = 12;
    const actualMonths = YearToMonth(years);
    expect(actualMonths).toBe(expectedMonths);
  });

  it("should convert 2 years to 24 months", () => {
    const years = 2;
    const expectedMonths = 24;
    const actualMonths = YearToMonth(years);
    expect(actualMonths).toBe(expectedMonths);
  });
});

describe("YearsToMonths", () => {
  it("should be an alias for YearToMonth", () => {
    expect(YearsToMonths).toBe(YearToMonth);
  });
});
