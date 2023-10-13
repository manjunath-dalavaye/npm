import { DayToWeek, DaysToWeeks } from "./day-to-week";

describe("DayToWeek", () => {
  it("should convert 7 days to 1 week", () => {
    const days = 7;
    const expectedWeeks = 1;
    const actualWeeks = DayToWeek(days);
    expect(actualWeeks).toBe(expectedWeeks);
  });

  it("should convert 14 days to 2 weeks", () => {
    const days = 14;
    const expectedWeeks = 2;
    const actualWeeks = DayToWeek(days);
    expect(actualWeeks).toBe(expectedWeeks);
  });
});

describe("DaysToWeeks", () => {
  it("should be an alias for DayToWeek", () => {
    expect(DaysToWeeks).toBe(DayToWeek);
  });
});
