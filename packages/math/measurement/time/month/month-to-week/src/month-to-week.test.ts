import { MonthToWeek, MonthsToWeeks } from "./month-to-week";

describe("MonthToWeek", () => {
  it("should convert 1 month to 4 weeks", () => {
    const months = 1;
    const expectedWeeks = 4;
    const actualWeeks = MonthToWeek(months);
    expect(actualWeeks).toBe(expectedWeeks);
  });

  it("should convert 2 months to 8 weeks", () => {
    const months = 2;
    const expectedWeeks = 8;
    const actualWeeks = MonthToWeek(months);
    expect(actualWeeks).toBe(expectedWeeks);
  });
});

describe("MonthsToWeeks", () => {
  it("should be an alias for MonthToWeek", () => {
    expect(MonthsToWeeks).toBe(MonthToWeek);
  });
});
