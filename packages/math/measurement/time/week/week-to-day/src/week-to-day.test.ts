import { WeekToDay, WeeksToDays } from "./week-to-day";

describe("WeekToDay", () => {
  it("should convert 1 week to 7 days", () => {
    const weeks = 1;
    const expectedDays = 7;
    const actualDays = WeekToDay(weeks);
    expect(actualDays).toBe(expectedDays);
  });

  it("should convert 2 weeks to 14 days", () => {
    const weeks = 2;
    const expectedDays = 14;
    const actualDays = WeekToDay(weeks);
    expect(actualDays).toBe(expectedDays);
  });
});

describe("WeeksToDays", () => {
  it("should be an alias for WeekToDay", () => {
    expect(WeeksToDays).toBe(WeekToDay);
  });
});
