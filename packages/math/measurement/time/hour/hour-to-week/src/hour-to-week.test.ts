import { HourToWeek, HoursToWeeks } from "./hour-to-week";

describe("HourToWeek", () => {
  it("should convert 168 hours to 1 week", () => {
    const hours = 168;
    const expectedWeeks = 1;
    const actualWeeks = HourToWeek(hours);
    expect(actualWeeks).toBe(expectedWeeks);
  });

  it("should convert 336 hours to 2 weeks", () => {
    const hours = 336;
    const expectedWeeks = 2;
    const actualWeeks = HourToWeek(hours);
    expect(actualWeeks).toBe(expectedWeeks);
  });
});

describe("HoursToWeeks", () => {
  it("should be an alias for HourToWeek", () => {
    expect(HoursToWeeks).toBe(HourToWeek);
  });
});
