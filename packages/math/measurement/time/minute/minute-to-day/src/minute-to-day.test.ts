import { MinuteToDay, MinutesToDays } from "./minute-to-day";

describe("MinuteToDay", () => {
  it("should convert 1440 minutes to 1 day", () => {
    const minutes = 1440;
    const expectedDays = 1;
    const actualDays = MinuteToDay(minutes);
    expect(actualDays).toBe(expectedDays);
  });

  it("should convert 2880 minutes to 2 days", () => {
    const minutes = 2880;
    const expectedDays = 2;
    const actualDays = MinuteToDay(minutes);
    expect(actualDays).toBe(expectedDays);
  });
});

describe("MinutesToDays", () => {
  it("should be an alias for MinuteToDay", () => {
    expect(MinutesToDays).toBe(MinuteToDay);
  });
});
