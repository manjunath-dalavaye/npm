import { MillisecondToYear, MillisecondsToYears } from "./millisecond-to-year";

describe("MillisecondToYear", () => {
  it("converts 31536000000 milliseconds to 1 year", () => {
    expect(MillisecondToYear(31536000000)).toBe(1);
  });

  it("converts 63072000000 milliseconds to 2 years", () => {
    expect(MillisecondToYear(63072000000)).toBe(2);
  });

  it("converts 0 milliseconds to 0 years", () => {
    expect(MillisecondToYear(0)).toBe(0);
  });

  it("converts negative milliseconds to negative years", () => {
    expect(MillisecondToYear(-31536000000)).toBe(-1);
  });
});

describe("MillisecondsToYears", () => {
  it("is an alias for MillisecondToYear", () => {
    expect(MillisecondsToYears).toBe(MillisecondToYear);
  });
});
