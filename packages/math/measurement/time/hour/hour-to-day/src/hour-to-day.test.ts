import { HourToDay, HoursToDays } from "./hour-to-day";

describe("HourToDay", () => {
  it("should convert 24 hours to 1 day", () => {
    const hours = 24;
    const expectedDays = 1;
    const actualDays = HourToDay(hours);
    expect(actualDays).toBe(expectedDays);
  });

  it("should convert 48 hours to 2 days", () => {
    const hours = 48;
    const expectedDays = 2;
    const actualDays = HourToDay(hours);
    expect(actualDays).toBe(expectedDays);
  });
});

describe("HoursToDays", () => {
  it("should be an alias for HourToDay", () => {
    expect(HoursToDays).toBe(HourToDay);
  });
});
