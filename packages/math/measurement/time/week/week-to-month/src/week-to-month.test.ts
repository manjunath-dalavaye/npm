import { WeekToMonth, WeeksToMonths } from "./week-to-month";

describe("WeekToMonth", () => {
  it("should convert 1 week to approximately 0.25 months", () => {
    const weeks = 1;
    const expectedMonths = 0.25;
    const actualMonths = WeekToMonth(weeks);
    expect(actualMonths).toBeCloseTo(expectedMonths, 5);
  });

  it("should convert 2 weeks to approximately 0.5 months", () => {
    const weeks = 2;
    const expectedMonths = 0.5;
    const actualMonths = WeekToMonth(weeks);
    expect(actualMonths).toBeCloseTo(expectedMonths, 5);
  });
});

describe("WeeksToMonths", () => {
  it("should be an alias for WeekToMonth", () => {
    expect(WeeksToMonths).toBe(WeekToMonth);
  });
});
