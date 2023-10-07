import {
  MillisecondToSecond,
  MillisecondsToSeconds,
} from "./millisecond-to-second";

describe("MillisecondToSecond", () => {
  it("converts 5000 milliseconds to 5 seconds", () => {
    expect(MillisecondToSecond(5000)).toBe(5);
  });

  it("converts 1000 milliseconds to 1 second", () => {
    expect(MillisecondToSecond(1000)).toBe(1);
  });

  it("converts 0 milliseconds to 0 seconds", () => {
    expect(MillisecondToSecond(0)).toBe(0);
  });

  it("converts negative milliseconds to negative seconds", () => {
    expect(MillisecondToSecond(-5000)).toBe(-5);
  });
});

describe("MillisecondsToSeconds", () => {
  it("is an alias for MillisecondToSecond", () => {
    expect(MillisecondsToSeconds).toBe(MillisecondToSecond);
  });
});
