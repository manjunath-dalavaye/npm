import { HourToMillisecond, HoursToMilliseconds } from "./hour-to-millisecond";

describe("HourToMillisecond", () => {
  it("should convert 1 hour to 3600000 milliseconds", () => {
    const hours = 1;
    const expectedMilliseconds = 3600000;
    const actualMilliseconds = HourToMillisecond(hours);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });

  it("should convert 2 hours to 7200000 milliseconds", () => {
    const hours = 2;
    const expectedMilliseconds = 7200000;
    const actualMilliseconds = HourToMillisecond(hours);
    expect(actualMilliseconds).toBe(expectedMilliseconds);
  });
});

describe("HoursToMilliseconds", () => {
  it("should be an alias for HourToMillisecond", () => {
    expect(HoursToMilliseconds).toBe(HourToMillisecond);
  });
});
