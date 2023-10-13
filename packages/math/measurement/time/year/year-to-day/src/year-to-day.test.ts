import { YearToDay, YearsToDays } from "./year-to-day";

describe("YearToDay", () => {
  it("should convert 1 year to 365 days", () => {
    const years = 1;
    const expectedDays = 365;
    const actualDays = YearToDay(years);
    expect(actualDays).toBe(expectedDays);
  });

  it("should convert 2 years to 730 days", () => {
    const years = 2;
    const expectedDays = 730;
    const actualDays = YearToDay(years);
    expect(actualDays).toBe(expectedDays);
  });
});

describe("YearsToDays", () => {
  it("should be an alias for YearToDay", () => {
    expect(YearsToDays).toBe(YearToDay);
  });
});
