import { WeekToSecond, WeeksToSeconds } from "./week-to-second";

describe("WeekToSecond", () => {
  it("should convert 1 week to 604800 seconds", () => {
    const weeks = 1;
    const expectedSeconds = 604800;
    const actualSeconds = WeekToSecond(weeks);
    expect(actualSeconds).toBe(expectedSeconds);
  });

  it("should convert 2 weeks to 1209600 seconds", () => {
    const weeks = 2;
    const expectedSeconds = 1209600;
    const actualSeconds = WeekToSecond(weeks);
    expect(actualSeconds).toBe(expectedSeconds);
  });
});

describe("WeeksToSeconds", () => {
  it("should be an alias for WeekToSecond", () => {
    expect(WeeksToSeconds).toBe(WeekToSecond);
  });
});
