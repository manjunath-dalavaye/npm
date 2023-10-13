import { WeekToHour, WeeksToHours } from "./week-to-hour";

describe("WeekToHour", () => {
  it("should convert 1 week to 168 hours", () => {
    const weeks = 1;
    const expectedHours = 168;
    const actualHours = WeekToHour(weeks);
    expect(actualHours).toBe(expectedHours);
  });

  it("should convert 2 weeks to 336 hours", () => {
    const weeks = 2;
    const expectedHours = 336;
    const actualHours = WeekToHour(weeks);
    expect(actualHours).toBe(expectedHours);
  });
});

describe("WeeksToHours", () => {
  it("should be an alias for WeekToHour", () => {
    expect(WeeksToHours).toBe(WeekToHour);
  });
});
