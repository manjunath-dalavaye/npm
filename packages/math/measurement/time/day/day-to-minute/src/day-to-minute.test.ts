import { DayToMinute, DaysToMinutes } from "./day-to-minute";

describe("DayToMinute", () => {
  it("should convert 1 day to 1440 minutes", () => {
    const days = 1;
    const expectedMinutes = 1440;
    const actualMinutes = DayToMinute(days);
    expect(actualMinutes).toBe(expectedMinutes);
  });

  it("should convert 2 days to 2880 minutes", () => {
    const days = 2;
    const expectedMinutes = 2880;
    const actualMinutes = DayToMinute(days);
    expect(actualMinutes).toBe(expectedMinutes);
  });
});

describe("DaysToMinutes", () => {
  it("should be an alias for DayToMinute", () => {
    expect(DaysToMinutes).toBe(DayToMinute);
  });
});
