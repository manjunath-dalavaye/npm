import { MinuteToWeek, MinutesToWeeks } from "./minute-to-week";

describe("MinuteToWeek", () => {
  it("should convert 10080 minutes to 1 week", () => {
    const minutes = 10080;
    const expectedWeeks = 1;
    const actualWeeks = MinuteToWeek(minutes);
    expect(actualWeeks).toBe(expectedWeeks);
  });

  it("should convert 20160 minutes to 2 weeks", () => {
    const minutes = 20160;
    const expectedWeeks = 2;
    const actualWeeks = MinuteToWeek(minutes);
    expect(actualWeeks).toBe(expectedWeeks);
  });
});

describe("MinutesToWeeks", () => {
  it("should be an alias for MinuteToWeek", () => {
    expect(MinutesToWeeks).toBe(MinuteToWeek);
  });
});
