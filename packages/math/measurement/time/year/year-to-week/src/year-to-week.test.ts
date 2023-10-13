import { YearToWeek, YearsToWeeks } from "./year-to-week";

describe("YearToWeek", () => {
  it("should convert 1 year to 52 weeks", () => {
    const years = 1;
    const expectedWeeks = 52;
    const actualWeeks = YearToWeek(years);
    expect(actualWeeks).toBe(expectedWeeks);
  });

  it("should convert 2 years to 104 weeks", () => {
    const years = 2;
    const expectedWeeks = 104;
    const actualWeeks = YearToWeek(years);
    expect(actualWeeks).toBe(expectedWeeks);
  });
});

describe("YearsToWeeks", () => {
  it("should be an alias for YearToWeek", () => {
    expect(YearsToWeeks).toBe(YearToWeek);
  });
});
