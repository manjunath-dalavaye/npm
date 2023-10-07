import { MillisecondToDay, MillisecondsToDays } from "./millisecond-to-day";

describe("MillisecondToDay", () => {
  it("converts 86400000 milliseconds to 1 day", () => {
    expect(MillisecondToDay(86400000)).toBe(1);
  });

  it("converts 172800000 milliseconds to 2 days", () => {
    expect(MillisecondToDay(172800000)).toBe(2);
  });

  it("converts 0 milliseconds to 0 days", () => {
    expect(MillisecondToDay(0)).toBe(0);
  });

  it("converts negative milliseconds to negative days", () => {
    expect(MillisecondToDay(-86400000)).toBe(-1);
  });
});

describe("MillisecondsToDays", () => {
  it("is an alias for MillisecondToDay", () => {
    expect(MillisecondsToDays).toBe(MillisecondToDay);
  });
});
