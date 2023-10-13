import { WeekToMillisecond, WeeksToMilliseconds } from "./week-to-millisecond";

describe("WeekToMillisecond", () => {
  it("should convert 1 week to 604800000 milliseconds", () => {
    const weeks = 1;
    const expectedMilliseconds = 604800000;
    const actualMilliseconds = WeekToMillisecond(weeks);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert 2 weeks to 1209600000 milliseconds", () => {
    const weeks = 2;
    const expectedMilliseconds = 1209600000;
    const actualMilliseconds = WeekToMillisecond(weeks);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });
});

describe("WeeksToMilliseconds", () => {
  it("should be an alias for WeekToMillisecond", () => {
    expect(WeeksToMilliseconds).toBe(WeekToMillisecond);
  });
});
