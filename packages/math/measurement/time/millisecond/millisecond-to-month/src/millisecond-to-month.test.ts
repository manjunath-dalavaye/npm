import {
  MillisecondToMonth,
  MillisecondsToMonths,
} from "./millisecond-to-month";

describe("MillisecondToMonth", () => {
  it("converts 2592000000 milliseconds to 1 month", () => {
    expect(MillisecondToMonth(2592000000)).toBe(1);
  });

  it("converts 5184000000 milliseconds to 2 months", () => {
    expect(MillisecondToMonth(5184000000)).toBe(2);
  });

  it("converts 0 milliseconds to 0 months", () => {
    expect(MillisecondToMonth(0)).toBe(0);
  });

  it("converts negative milliseconds to negative months", () => {
    expect(MillisecondToMonth(-2592000000)).toBe(-1);
  });
});

describe("MillisecondsToMonths", () => {
  it("is an alias for MillisecondToMonth", () => {
    expect(MillisecondsToMonths).toBe(MillisecondToMonth);
  });
});
