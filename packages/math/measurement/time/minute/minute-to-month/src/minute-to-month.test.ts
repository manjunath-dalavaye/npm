import { MinuteToMonth, MinutesToMonths } from "./minute-to-month";

describe("MinuteToMonth", () => {
  it("should convert 43200 minutes to 1 month", () => {
    const minutes = 43200;
    const expectedMonths = 1;
    const actualMonths = MinuteToMonth(minutes);
    expect(actualMonths).toBe(expectedMonths);
  });

  it("should convert 86400 minutes to 2 months", () => {
    const minutes = 86400;
    const expectedMonths = 2;
    const actualMonths = MinuteToMonth(minutes);
    expect(actualMonths).toBe(expectedMonths);
  });
});

describe("MinutesToMonths", () => {
  it("should be an alias for MinuteToMonth", () => {
    expect(MinutesToMonths).toBe(MinuteToMonth);
  });
});
