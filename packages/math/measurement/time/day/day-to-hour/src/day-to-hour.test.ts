import { DayToHour, DaysToHours } from "./day-to-hour";

describe("DayToHour", () => {
  it("should convert 1 day to 24 hours", () => {
    const days = 1;
    const expectedHours = 24;
    const actualHours = DayToHour(days);
    expect(actualHours).toBe(expectedHours);
  });

  it("should convert 2 days to 48 hours", () => {
    const days = 2;
    const expectedHours = 48;
    const actualHours = DayToHour(days);
    expect(actualHours).toBe(expectedHours);
  });
});

describe("DaysToHours", () => {
  it("should be an alias for DayToHour", () => {
    expect(DaysToHours).toBe(DayToHour);
  });
});
