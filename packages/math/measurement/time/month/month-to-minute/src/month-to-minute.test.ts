import { MonthToMinute, MonthsToMinutes } from "./month-to-minute";

describe("MonthToMinute", () => {
  it("should convert 1 month to 43,200 minutes", () => {
    const months = 1;
    const expectedMinutes = 43200;
    const actualMinutes = MonthToMinute(months);
    expect(actualMinutes).toBe(expectedMinutes);
  });

  it("should convert 2 months to 86,400 minutes", () => {
    const months = 2;
    const expectedMinutes = 86400;
    const actualMinutes = MonthToMinute(months);
    expect(actualMinutes).toBe(expectedMinutes);
  });
});

describe("MonthsToMinutes", () => {
  it("should be an alias for MonthToMinute", () => {
    expect(MonthsToMinutes).toBe(MonthToMinute);
  });
});
