import { HourToMonth, HoursToMonths } from "./hour-to-month";

describe("HourToMonth", () => {
  it("should convert 720 hours to 1 month", () => {
    const hours = 720;
    const expectedMonths = 1;
    const actualMonths = HourToMonth(hours);
    expect(actualMonths).toBe(expectedMonths);
  });

  it("should convert 1440 hours to 2 months", () => {
    const hours = 1440;
    const expectedMonths = 2;
    const actualMonths = HourToMonth(hours);
    expect(actualMonths).toBe(expectedMonths);
  });
});

describe("HoursToMonths", () => {
  it("should be an alias for HourToMonth", () => {
    expect(HoursToMonths).toBe(HourToMonth);
  });
});
