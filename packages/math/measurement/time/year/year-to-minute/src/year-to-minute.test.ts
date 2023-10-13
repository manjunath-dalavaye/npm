import { YearToMinute, YearsToMinutes } from "./year-to-minute";

describe("YearToMinute", () => {
  it("should convert 1 year to 525,600 minutes", () => {
    const years = 1;
    const expectedMinutes = 525600;
    const actualMinutes = YearToMinute(years);
    expect(actualMinutes).toBe(expectedMinutes);
  });

  it("should convert 2 years to 1,051,200 minutes", () => {
    const years = 2;
    const expectedMinutes = 1051200;
    const actualMinutes = YearToMinute(years);
    expect(actualMinutes).toBe(expectedMinutes);
  });
});

describe("YearsToMinutes", () => {
  it("should be an alias for YearToMinute", () => {
    expect(YearsToMinutes).toBe(YearToMinute);
  });
});
