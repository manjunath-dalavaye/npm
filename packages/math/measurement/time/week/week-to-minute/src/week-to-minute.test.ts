import { WeekToMinute, WeeksToMinutes } from "./week-to-minute";

describe("WeekToMinute", () => {
  it("should convert 1 week to 10080 minutes", () => {
    const weeks = 1;
    const expectedMinutes = 10080;
    const actualMinutes = WeekToMinute(weeks);
    expect(actualMinutes).toBe(expectedMinutes);
  });

  it("should convert 2 weeks to 20160 minutes", () => {
    const weeks = 2;
    const expectedMinutes = 20160;
    const actualMinutes = WeekToMinute(weeks);
    expect(actualMinutes).toBe(expectedMinutes);
  });
});

describe("WeeksToMinutes", () => {
  it("should be an alias for WeekToMinute", () => {
    expect(WeeksToMinutes).toBe(WeekToMinute);
  });
});
