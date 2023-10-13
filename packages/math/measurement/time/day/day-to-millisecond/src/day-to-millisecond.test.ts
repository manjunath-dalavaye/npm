import { DayToMillisecond, DaysToMilliseconds } from "./day-to-millisecond";

describe("DayToMillisecond", () => {
  it("should convert 1 day to 86400000 milliseconds", () => {
    const days = 1;
    const expectedMilliseconds = 86400000;
    const actualMilliseconds = DayToMillisecond(days);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert 2 days to 172800000 milliseconds", () => {
    const days = 2;
    const expectedMilliseconds = 172800000;
    const actualMilliseconds = DayToMillisecond(days);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });
});

describe("DaysToMilliseconds", () => {
  it("should be an alias for DayToMillisecond", () => {
    expect(DaysToMilliseconds).toBe(DayToMillisecond);
  });
});
