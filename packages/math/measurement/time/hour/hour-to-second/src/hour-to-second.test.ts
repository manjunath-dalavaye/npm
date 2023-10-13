import { HourToSecond, HoursToSeconds } from "./hour-to-second";

describe("HourToSecond", () => {
  it("should convert 1 hour to 3600 seconds", () => {
    const hours = 1;
    const expectedSeconds = 3600;
    const actualSeconds = HourToSecond(hours);
    expect(actualSeconds).toBe(expectedSeconds);
  });

  it("should convert 2 hours to 7200 seconds", () => {
    const hours = 2;
    const expectedSeconds = 7200;
    const actualSeconds = HourToSecond(hours);
    expect(actualSeconds).toBe(expectedSeconds);
  });
});

describe("HoursToSeconds", () => {
  it("should be an alias for HourToSecond", () => {
    expect(HoursToSeconds).toBe(HourToSecond);
  });
});
