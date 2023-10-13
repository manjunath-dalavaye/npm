import { DayToMonth, DaysToMonths } from "./day-to-month";

describe("DayToMonth", () => {
  it("should convert 30 days to 1 month", () => {
    const days = 30;
    const expectedMonths = 1;
    const actualMonths = DayToMonth(days);
    expect(actualMonths).toBe(expectedMonths);
  });

  it("should convert 60 days to 2 months", () => {
    const days = 60;
    const expectedMonths = 2;
    const actualMonths = DayToMonth(days);
    expect(actualMonths).toBe(expectedMonths);
  });
});

describe("DaysToMonths", () => {
  it("should be an alias for DayToMonth", () => {
    expect(DaysToMonths).toBe(DayToMonth);
  });
});
