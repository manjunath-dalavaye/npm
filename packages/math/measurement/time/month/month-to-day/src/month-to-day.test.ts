import { MonthToDay, MonthsToDays } from "./month-to-day";

describe("MonthToDay", () => {
  it("should convert 1 month to 30 days", () => {
    const months = 1;
    const expectedDays = 30;
    const actualDays = MonthToDay(months);
    expect(actualDays).toBe(expectedDays);
  });

  it("should convert 2 months to 60 days", () => {
    const months = 2;
    const expectedDays = 60;
    const actualDays = MonthToDay(months);
    expect(actualDays).toBe(expectedDays);
  });
});

describe("MonthsToDays", () => {
  it("should be an alias for MonthToDay", () => {
    expect(MonthsToDays).toBe(MonthToDay);
  });
});
