import { MillisecondToHour, MillisecondsToHours } from "./millisecond-to-hour";

describe("MillisecondToHour", () => {
  it("converts 7200000 milliseconds to 2 hours", () => {
    expect(MillisecondToHour(7200000)).toBe(2);
  });

  it("converts 3600000 milliseconds to 1 hour", () => {
    expect(MillisecondToHour(3600000)).toBe(1);
  });

  it("converts 0 milliseconds to 0 hours", () => {
    expect(MillisecondToHour(0)).toBe(0);
  });

  it("converts negative milliseconds to negative hours", () => {
    expect(MillisecondToHour(-7200000)).toBe(-2);
  });
});

describe("MillisecondsToHours", () => {
  it("is an alias for MillisecondToHour", () => {
    expect(MillisecondsToHours).toBe(MillisecondToHour);
  });
});
