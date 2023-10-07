import {
  MillisecondToMinute,
  MillisecondsToMinutes,
} from "./millisecond-to-minute";

describe("MillisecondToMinute", () => {
  it("converts 300000 milliseconds to 5 minutes", () => {
    expect(MillisecondToMinute(300000)).toBe(5);
  });

  it("converts 60000 milliseconds to 1 minute", () => {
    expect(MillisecondToMinute(60000)).toBe(1);
  });

  it("converts 0 milliseconds to 0 minutes", () => {
    expect(MillisecondToMinute(0)).toBe(0);
  });

  it("converts negative milliseconds to negative minutes", () => {
    expect(MillisecondToMinute(-300000)).toBe(-5);
  });
});

describe("MillisecondsToMinutes", () => {
  it("is an alias for MillisecondToMinute", () => {
    expect(MillisecondsToMinutes).toBe(MillisecondToMinute);
  });
});
