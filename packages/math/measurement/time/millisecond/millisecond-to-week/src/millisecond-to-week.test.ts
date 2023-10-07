import { MillisecondToWeek, MillisecondsToWeeks } from "./millisecond-to-week";

describe("MillisecondToWeek", () => {
  it("converts 604800000 milliseconds to 1 week", () => {
    expect(MillisecondToWeek(604800000)).toBe(1);
  });

  it("converts 1209600000 milliseconds to 2 weeks", () => {
    expect(MillisecondToWeek(1209600000)).toBe(2);
  });

  it("converts 0 milliseconds to 0 weeks", () => {
    expect(MillisecondToWeek(0)).toBe(0);
  });

  it("converts negative milliseconds to negative weeks", () => {
    expect(MillisecondToWeek(-604800000)).toBe(-1);
  });
});

describe("MillisecondsToWeeks", () => {
  it("is an alias for MillisecondToWeek", () => {
    expect(MillisecondsToWeeks).toBe(MillisecondToWeek);
  });
});
