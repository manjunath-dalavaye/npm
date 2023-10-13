import { DayToSecond, DaysToSeconds } from "./day-to-second";

describe("DayToSecond", () => {
  it("should convert 1 day to 86400 seconds", () => {
    const days = 1;
    const expectedSeconds = 86400;
    const actualSeconds = DayToSecond(days);
    expect(actualSeconds).toBe(expectedSeconds);
  });

  it("should convert 2 days to 172800 seconds", () => {
    const days = 2;
    const expectedSeconds = 172800;
    const actualSeconds = DayToSecond(days);
    expect(actualSeconds).toBe(expectedSeconds);
  });
});

describe("DaysToSeconds", () => {
  it("should be an alias for DayToSecond", () => {
    expect(DaysToSeconds).toBe(DayToSecond);
  });
});
